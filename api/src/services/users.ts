import User, { UserDocument } from '../models/users'

const getUsers = async () => {
  const getUser = await User.find()
  return getUser
}

const findOrCreate = async (payload: Partial<UserDocument>) => {
  try {
    const foundUser = await User.findOne({ email: payload.email })
    if (foundUser) {
      return foundUser
    } else {
      const newUser = new User({
        email: payload.email,
        name: {
          firstname: payload.name?.firstname,
          lastname: payload.name?.lastname,
        },
      })
      const newCreatedUser = await newUser.save()
      return newCreatedUser
    }
  } catch (error) {
    console.log(error)
  }
}

const findUserByEmail = async (email: string) => {
  return User.findOne({email:email})
}

export default { getUsers, findOrCreate, findUserByEmail }
