import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  id: {
    type:Number,
  },
  userId: {
    type: Number,
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

const cartModel = mongoose.model("Product", CartSchema);

export default cartModel;
