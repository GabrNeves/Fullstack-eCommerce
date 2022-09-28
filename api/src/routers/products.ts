import { Router } from "express";
import {getAllProducts, createProduct, findById, deleteProduct, updateProduct} from '../controllers/products'


const router = Router()

router.post('/', createProduct)
router.purge('/:productId', updateProduct)
router.get('/', getAllProducts)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)

export default router