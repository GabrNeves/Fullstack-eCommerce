import productModel from '../models/products'

const getProducts = async () => {
  const getProduct = await productModel.find()
  return getProduct
}

export default { getProducts }