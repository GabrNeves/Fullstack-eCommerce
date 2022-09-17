import { Router } from "express";
import { getAllCarts } from '../controllers/carts'


const router = Router()

router.get('/', getAllCarts)

export default router