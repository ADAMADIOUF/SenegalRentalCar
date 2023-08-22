import express from 'express'
import { createBooking } from '../controller/bookingController.js'

const router = express.Router()

// POST /bookings - Create a new booking
router.post('/', createBooking)

export default router
