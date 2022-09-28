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

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId).populate({
    path: 'orderIds',
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found!`)
  }

  return foundUser
}

const getUsers = async (): Promise<UserDocument[]> => {
  return User.find().sort({name:1})
}

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found!`)
  }
  return foundUser
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
        loginWith: 'google',
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

const banUser = async (userId: string) => {
  const foundUser = await User.findOne({ _id: userId })
  if (foundUser) {
    if (foundUser.isBanned === true) {
      foundUser.isBanned = false
      updateUser(userId, foundUser)
    } else {
      foundUser.isBanned = true
      updateUser(userId, foundUser)
    }
  } else {
    throw new NotFoundError(`User ${userId} not found!`)
  }
}

const admin = async (userId: string) => {
  const foundUser = await User.findOne({_id: userId})
  if (foundUser) {
    if (foundUser.admin === true) {
      foundUser.admin = false
    } else {
      if (foundUser.isBanned === true) {
        foundUser.admin = false
      } else {
        foundUser.admin = true
      }
    }
    updateUser(userId, foundUser)
  } else {
    throw new NotFoundError('User not found')
  }
}

export default {
  createUser,
  updateUser,
  findById,
  getUsers,
  deleteUser,
  findOrCreate,
  findUserByEmail,
  banUser,
  admin
}
