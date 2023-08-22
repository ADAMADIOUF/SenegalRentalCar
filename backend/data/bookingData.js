import mongoose from 'mongoose'

const bookingData = [
  {
    renter: new mongoose.Types.ObjectId('5d7a1f7a4797c33f64c3e265'), // Replace with actual user ObjectId
    car: new mongoose.Types.ObjectId('5e7a1f7a4797c33f64c3e266'), // Replace with actual car ObjectId
    startDate: new Date('2023-08-15'),
    endDate: new Date('2023-08-20'),
    totalCost: 250,
    status: 'confirmed',
  },
  // ... other booking objects
]

export default bookingData
