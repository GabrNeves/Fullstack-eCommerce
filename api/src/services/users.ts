import User, { UserDocument } from '../models/users'
import { NotFoundError } from '../helper/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found!`)
  }

  return foundUser
}

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
      return await newUser.save()
    }
  } catch (error) {
    console.log(error)
  }
}

const findUserByEmail = async (email: string) => {
  return User.findOne({ email: email })
}

export default {
  createUser,
  updateUser,
  getUsers,
  findOrCreate,
  findUserByEmail,
}
