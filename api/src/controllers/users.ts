import { Request, Response, NextFunction } from "express";
import UserServices from '../services/users'

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await UserServices.getUsers())
  } catch (error) {
    console.log(error, ' on controller module')
  }
}