import asyncHandler from '../middleware/asyncHandler.js'
import Car from '../models/CarModel.js'
const getProducts = asyncHandler(async (req, res) => {
  const products = await Car.find({})
  res.json(products)
})
const getProductById = asyncHandler(async (req, res) => {
  const product = await Car.findById(req.params.id)
  if (product) {
    return res.json(product)
  }
  res.status(404)
  throw new Error('Resource not found')
})
const createProduct = asyncHandler(async (req, res) => {
  const product = await new Car({
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Silver',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '2.5L Inline-4',
    mileage: 25000,
    description: 'Sample description',
    category: 'location',
    subcategory: 'Compact',
    city: 'New York',
    location: {
      type: 'Point',
      coordinates: [-74.006, 40.7128], // Replace with actual coordinates
    },
    ownerInfo: {
      name: 'John Doe',
      image: '/images/john.jpg',
      phoneNumber: '123-456-7890',
    },
    images: ['/images/c3.png', '/images/c4.png'],
    pricePerDay: 0,
    isFavorite: false,
    user: req.user._id,
  })

  try {
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  } catch (error) {
    console.error('Error creating product:', error)
    res.status(500).json({ error: 'Failed to create product' })
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  const {
    make,
    model,
    year,
    color,
    transmission,
    fuelType,
    engine,
    mileage,
    description,
    images,
    subcategory,
    category,
    pricePerDay,
    isFavorite,
    location, // Add the location field
    ownerInfo, // Add the ownerInfo field
  } = req.body

  const product = await Car.findById(req.params.id)

  if (product) {
    // Update the product properties with the new values
    product.make = make
    product.model = model
    product.year = year
    product.color = color
    product.transmission = transmission
    product.fuelType = fuelType
    product.engine = engine
    product.mileage = mileage
    product.description = description
    product.images = images
    product.subcategory = subcategory
    product.category = category
    product.pricePerDay = pricePerDay
    product.isFavorite = isFavorite
    product.location = location // Set the location field
    product.ownerInfo = ownerInfo // Set the ownerInfo field

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Car.findById(req.params.id)
  if (product) {
    await Car.deleteOne({ _id: product._id })
    res.status(200).json({ message: 'Product deleted' })
  } else {
    res.status(404)
    throw new Error('Resource not found')
  }
})
export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
