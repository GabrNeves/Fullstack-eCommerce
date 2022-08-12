import { Request, Response, NextFunction } from "express";
import ProductServices from '../services/products'

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await ProductServices.getProducts())
  } catch (error) {
    console.log(error, ' on controller module')
  }
}