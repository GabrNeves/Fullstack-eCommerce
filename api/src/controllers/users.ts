import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User, { UserDocument } from '../models/users'
import UserServices from '../services/users'
import { JWT_SECRET } from '../util/secrets'
import { BadRequestError } from '../helper/apiError'
import bcrypt from 'bcrypt'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      next(new BadRequestError('Missing email address'))
    }
    const existUserEmail = await UserServices.findOrCreate(req.body.email)
    if (existUserEmail) {
      next(new BadRequestError('Selected e-mail already have an account.'))
    }
    if (!req.body.password) {
      next(new BadRequestError('Missing password'))
    }
    const { firstname, lastname, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    })
    await UserServices.createUser(user)
    res.json(user)
  } catch (error) {
    console.log(error)
  }
}

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

export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as UserDocument
    const { email, _id, name } = userGoogleData
    const token = jwt.sign(
      {
        email,
        _id,
        name,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    res.json({ token, userGoogleData })
  } catch (error) {
    console.log(error)
  }
}
