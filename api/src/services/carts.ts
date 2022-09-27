import { NotFoundError } from '../helper/apiError'
import Cart, { CartDocument } from '../models/carts'


const createCart = async (cart: CartDocument): Promise<CartDocument> => {
  return cart.save()
}

const findById = async (cartId: string): Promise<CartDocument> => {
  const foundCart = await Cart.findById(cartId)

  if (!foundCart) {
    throw new NotFoundError(`cart ${cartId} not found!`)
  }

  return foundCart
}

const getCarts = async () => {
  const getCart = await Cart.find()
  return getCart
}

const findByUserId = async (userId: string): Promise<CartDocument[]> => {
  return Cart.find({ userId: userId })
}

export default { getCarts, createCart, findById, findByUserId }