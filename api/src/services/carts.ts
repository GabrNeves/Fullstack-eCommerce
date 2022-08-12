import cartModel from '../models/carts'

const getCarts = async () => {
  const getCart = await cartModel.find()
  return getCart
}

export default { getCarts }