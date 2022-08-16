import { Request, Response, NextFunction } from 'express'
import { User } from '../models/users'
import UserServices from '../services/users'

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
    const userGoogleData = req.user as User;
    const { email, firstName, lastName } = userGoogleData
  } catch (error) {
    console.log(error)
  }
}
