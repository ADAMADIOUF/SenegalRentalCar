import cookieParser from 'cookie-parser'
import path from "path"
import express from 'express'
import carRoutes from './routes/carRoute.js'
import userRoutes from './routes/userRoutes.js'
import contactRoute from './routes/contactRoute.js'
import bookingRoutes from './routes/bookingRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'
import uploadRouteImageOwner from './routes/uploadRouteImageOwner.js'


import connectDB from './config/db.js'

import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
connectDB()

app.use('/api/products', carRoutes)
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/form', contactRoute)

app.use(`/api/upload`, uploadRoutes)
app.use(`/api/uploadOwner`, uploadRouteImageOwner)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`the app running at port ${port}`)
})
