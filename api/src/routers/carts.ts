import { Router } from "express";
import { getAllCarts, createCart, findById, findCartByUser } from '../controllers/carts'


const router = Router()

router.post('/', createCart)
router.get('/user/:userId', findCartByUser)
router.get('/', getAllCarts)
router.get('/:orderId', findById)

export default router