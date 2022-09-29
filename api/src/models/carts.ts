import mongoose, { Document, Model } from "mongoose";
import { ProductDocument } from './products'

export type ProductCart = ProductDocument & {
  quantity: number
}

export interface CartTypeModel extends Model<CartDocument> {}

const ProductCartSchema = new mongoose.Schema({
  id: {
    type:Number,
  },
  userId: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
  products: [
    {
      productId: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },
  ],
  __v: {
    type: Number,
  },
});

export type CartDocument = Document & {
  _id: string,
  userId: number,
  products: [
    {
      productId: {
        type: string,
      },
      quantity: {
        type: number,
      }
    }
  ],
  _v: number,
}

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products : [
    {
      type: ProductCartSchema,
    },
  ],
})

export default mongoose.model<CartDocument, CartTypeModel>(
  'Cart', CartSchema
)