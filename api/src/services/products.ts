import { NotFoundError } from '../helper/apiError'
import Product, { ProductDocument } from '../models/products'

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save()
}

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found!`)
  }

  return foundProduct
}

const getProducts = async () => {
  const getProduct = await Product.find()
  return getProduct
}

const updateProduct = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found!`)
  }

  return foundProduct
}

const deleteProduct = async (productId: string): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndDelete(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found!`)
  }

  return foundProduct
}

export default {
  createProduct,
  findById,
  getProducts,
  updateProduct,
  deleteProduct,
}
