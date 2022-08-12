import userModel from '../models/users'

const getUsers = async () => {
  const getUser = await userModel.find()
  return getUser
}

export default { getUsers }