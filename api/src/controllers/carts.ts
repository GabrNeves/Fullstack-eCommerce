import { Request, Response, NextFunction } from "express";
import CartServices from '../services/carts'
import Cart from '../models/carts'
import { BadRequestError } from "../helper/apiError";

export const createCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, products } = req.body

    const cart = new Cart({
      userId,
      products
    })

    await CartServices.createCart(cart)
    res.json(cart)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findCartByUser =async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId
    res.json(await CartServices.findByUserId(userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await CartServices.findById(req.params.cartId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const getAllCarts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await CartServices.getCarts())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}