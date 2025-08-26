import express from 'express'
import { addProduct, getProducts } from '../controllers/productController.js'
import { isLogged } from '../middlewares/auth.js'

const router = express.Router()

router.post('/',isLogged, addProduct)
router.get('/',isLogged, getProducts)

export default router