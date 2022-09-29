// acts like a middleware to check if user is logged in
import GoogleTokenStrategy from 'passport-google-id-token'
import dotenv from 'dotenv'
import UserServices from '../services/users'
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt'


dotenv.config()

export const googleStrategy = new GoogleTokenStrategy(
  {clientID: process.env.GOOGLE_CLIENT_ID as string},
  async function(parsedToken: any, googleId: string, done: any) {
    console.log(parsedToken, 'parsedToken');
    const userPayload = {
      email: parsedToken.payload?.email,
      name: {
        firstname: parsedToken.payload?.given_name,
        lastname: parsedToken.payload?.family_name
      }
    }

    // create or find user by name
    
    const user = await UserServices.findOrCreate(userPayload);
    done(null, user)
  },
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email
    const foundUser = await UserServices.findUserByEmail(userEmail)
    done(null, foundUser)
  }
)