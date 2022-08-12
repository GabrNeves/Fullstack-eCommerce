import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  id: {
    type:Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  products: [
    {
      productId: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  __v: {
    type: Number,
    required: true
  },
});

const cartModel = mongoose.model("Product", CartSchema);

export default cartModel;
