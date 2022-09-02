import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User, { UserDocument } from '../models/users'
import UserServices from '../services/users'
import { JWT_SECRET } from '../util/secrets'

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserServices.getUsers())
  } catch (error) {
    console.log(error, ' on controller module')
  }
}

// export type googleUser = {
//   email: string,
//   firstName: string,
//   lastName: string
// }

export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as UserDocument;
    const { email, _id, name } = userGoogleData
    const token = jwt.sign(
      {
        email,
        _id,
        name
      },
      JWT_SECRET,
      {
        expiresIn: '1h'
      }
    )
    res.json({ token, userGoogleData })
  } catch (error) {
    console.log(error)
  }
}
