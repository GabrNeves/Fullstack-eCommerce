import mongoose, {Document, Model} from 'mongoose'

export type UserDocument = Document & {
  address: {
    geolocation: {
      lat: string
      long: string
    }
    city: string
    street: string
    number: number
    zipcode: string
  }
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  __v: number
  isBanned: boolean
  loginWith: string
  admin: boolean
}

export interface UserTypeModel extends Model<UserDocument> {}

const UserSchema = new mongoose.Schema({
  address: {
    geolocation: {
      lat: {
        type: String,
        required: false,
      },
      long: {
        type: String,
        required: false,
      },
    },
    city: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
    number: {
      type: Number,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    },
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
  },
  phone: {
    type: String,
    required: false,
  },
  __v: {
    type: Number,
    required: false,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  loginWith: {
    type: String,
    required: false,
    default: 'password',
  },
  admin: {
    type: Boolean,
    default: false
  },
  orderIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    }
  ]
})

export default mongoose.model<UserDocument, UserTypeModel>('User', UserSchema)
