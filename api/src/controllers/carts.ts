import { Request, Response, NextFunction } from "express";
import CartServices from '../services/carts'

export const getAllCarts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await CartServices.getCarts())
  } catch (error) {
    console.log(error, ' on controller module')
  }
}