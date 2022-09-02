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
    required: true,
  },
  __v: {
    type: Number,
    required: false,
  },
})

export default mongoose.model<UserDocument, UserTypeModel>('User', UserSchema)
