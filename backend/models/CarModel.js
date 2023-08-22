import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
  category: { type: String, required: true },
  value: { type: Number, required: true },
})

const carSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  transmission: { type: String, required: true },
  fuelType: { type: String, required: true },
  engine: { type: String, required: true },
  mileage: { type: Number, required: true },

  description: {
    type: String,
    required: true,
  },
  pricePerDay: { type: Number, required: true },

  city: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  availability: [{ startDate: Date, endDate: Date }],
  images: {
    type: [String],
    required: true,
  },
  features: [String],
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  ownerInfo: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  ratings: [ratingSchema],
  isFavorite: { type: Boolean, default: false }, 
})

carSchema.index({ location: '2dsphere' })

const Car = mongoose.model('Car', carSchema)

export default Car
