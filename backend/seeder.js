import mongoose from 'mongoose'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import Car from './models/CarModel.js'
import User from './models/UserModel.js'
import Booking from './models/BookingModel.js'

dotenv.config()
connectDB()
const importData = async () => {
  try {
    await Booking.deleteMany()
    await User.deleteMany()
    await Car.deleteMany()
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Car.insertMany(sampleProduct)
    console.log(`Data imported!`.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Booking.deleteMany()
    await Car.deleteMany()
    await User.deleteMany()
    console.log(`Data Destroy!`.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
