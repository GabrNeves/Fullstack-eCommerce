import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  address: {
    geolocation: {
      lat: {
        type: String,
        required: true,
      },
      long: {
        type: String,
        required: true,
      },
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  phone: {
    type: String,
    required: true,
  },
  __v: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
