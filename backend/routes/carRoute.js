import { admin, protect } from '../middleware/authMiddleware.js'
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/carController.js'
import express from 'express'
const router = express.Router()
router.route(`/`).get(getProducts).post(protect, admin, createProduct)

router
  .route(`/:id`)
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct)




export default router
