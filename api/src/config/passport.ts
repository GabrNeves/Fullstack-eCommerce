// acts like a middleware to check if user is logged in
import GoogleTokenStrategy from 'passport-google-id-token'
import dotenv from 'dotenv'
import UserServices from '../services/users'

dotenv.config()

export const googleStrategy = new GoogleTokenStrategy(
  {clientID: process.env.GOOGLE_CLIENT_ID as string},
  async function(parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, 'parsedToken');
    const userPayload = {
      email: parsedToken.payload.email,
      firstName: parsedToken.payload.give_name,
      lastName: parsedToken.payload.family_name
    }

    // create or find user by name
    
    const user = await UserServices.findOrCreate(userPayload);
    done(null, user)
  },
)