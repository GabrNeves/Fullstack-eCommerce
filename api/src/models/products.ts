import mongoose, { Document, Model } from "mongoose";

export type ProductDocument = Document & {
  _id: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
}

export interface ProductTypeModel extends Model<ProductDocument> {}

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  rating: {
    rate: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
});

// ProductSchema.index({ name: 'text', category: 'text', desciption: 'text' })

export default mongoose.model<ProductDocument, ProductTypeModel>(
  'Product',
  ProductSchema
)
