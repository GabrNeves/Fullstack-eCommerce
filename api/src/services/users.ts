import userModel, { User } from '../models/users'

const getUsers = async () => {
  const getUser = await userModel.find()
  return getUser
}

const findOrCreate = async (payload: Partial<User>) => {
  try {
    const foundUser = await userModel.findOne({ email: payload.email })
    if (foundUser) {
      return foundUser
    } else {
      const newUser = {
        email: payload.email,
        name: {
          firstname: payload.name?.firstname,
          lastname: payload.name?.lastname,
        },
      }
      const newCreatedUser = await userModel.create(newUser)
      await newCreatedUser.save()
    }
  } catch (error) {
    console.log(error)
  }
}

export default { getUsers, findOrCreate }
