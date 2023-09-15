import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Loading from '../components/Loading'
import Error from '../components/Error'
import {
  useGetProductsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useUploadProductImageOwnerMutation,
} from '../slices/productsApiSlice'

const ProductEdit = () => {
  const { id: productId } = useParams()
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState(0)
const [color, setColor] = useState('')
const [transmission, setTransmission] = useState('')
const [fuelType, setFuelType] = useState('')
const [engine, setEngine] = useState('')
const [mileage, setMileage] = useState(0)
  const [images, setImages] = useState([])
  const [subcategory, setSubcategory] = useState('')
  const [category, setCategory] = useState('')
  
  const [description, setDescription] = useState('')
  const [pricePerDay, setPricePerDay] = useState(0)

const [location, setLocation] = useState({
  type: 'Point',
  coordinates: [-74.006, 40.7128], // Replace with actual coordinates
  city: 'New York',
})

const [ownerInfo, setOwnerInfo] = useState({
  name: 'John Doe',
  image: '/images/john.jpg',
  phoneNumber: '123-456-7890',
})

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductsQuery(productId)

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation()
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation()
    const [uploadProductImageOwner, { isLoading: loadingUploadOwner }] =
      useUploadProductImageOwnerMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (product) {
      setMake(product.make || '')
      setModel(product.model || '')
      setYear(product.year || 0)
      setColor(product.color || '')
      setTransmission(product.transmission || '')
      setFuelType(product.fuelType || '')
      setEngine(product.engine || '')
      setMileage(product.mileage || 0)
      setPricePerDay(product.pricePerDay || 0)

      setImages(product.images || [])
      
      setSubcategory(product.subcategory || '')
      setCategory(product.category || '')
      setDescription(product.description || '')
    }
  }, [product])

  const submitHandler = async (e) => {
    e.preventDefault()
    const updatedProduct = {
      productId,
      make, // Add make field
      model, // Add model field
      year,
      color,
      transmission,
      fuelType,
      engine,
      mileage,
      pricePerDay,
      images,
      subcategory,
      category,
      description,
      location,
      ownerInfo,
    }
    const result = await updateProduct(updatedProduct)
    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success('Produit mis à jour')
      navigate('/admin/productlist')
    }
  }

  const uploadFileHandler = async (e) => {
    const formData = new FormData()
    for (const file of e.target.files) {
      formData.append('images', file) // Use 'images' as field name to match backend
    }
    try {
      const res = await uploadProductImage(formData).unwrap()
      toast.success(res.message)
      setImages([...images, ...res.images])
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }
  const deleteImageHandler = (indexToDelete) => {
    const updatedImages = images.filter((_, index) => index !== indexToDelete)
    setImages(updatedImages)
  }
  const uploadOwnerImageHandler = async (e) => {
    const formData = new FormData()
    formData.append('image', e.target.files[0]) // Use 'image' as field name to match backend

    try {
      const res = await uploadProductImageOwner(formData).unwrap()
      toast.success(res.message)

      // Update the ownerInfo image URL
      setOwnerInfo((prevOwnerInfo) => ({
        ...prevOwnerInfo,
        image: res.images[0], // Assuming there's only one image uploaded
      }))
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }


  return (
    <div className='section-center container-edit-product'>
      <Link to={`/admin/productlist`} className='btn-back'>
        Retour
      </Link>
      <div>
        <h1>Modifier le produit</h1>
        {loadingUpdate && <Loading />}
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error variant='danger'>{error}</Error>
        ) : (
          <form onSubmit={submitHandler}>
            <div>
              <label>Make</label>
              <input
                type='text'
                placeholder='Enter make'
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </div>
            <div>
              <label>Model</label>
              <input
                type='text'
                placeholder='Enter model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type='number'
                placeholder='Enter year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div>
              <label>Color</label>
              <input
                type='text'
                placeholder='Enter color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div>
              <label>Transmission</label>
              <input
                type='text'
                placeholder='Enter transmission'
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              />
            </div>
            <div>
              <label>Fuel Type</label>
              <input
                type='text'
                placeholder='Enter fuel type'
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
              />
            </div>
            <div>
              <label>Engine</label>
              <input
                type='text'
                placeholder='Enter engine'
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              />
            </div>
            <div>
              <label>Mileage</label>
              <input
                type='number'
                placeholder='Enter mileage'
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>
            <div>
              <label>Categorie</label>
              <input
                type='text'
                placeholder='Entrez le categorie'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label>SubCategorie</label>
              <input
                type='text'
                placeholder='Entrez le subcategories'
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              />
            </div>

            <div>
              <label>Descriptions</label>
              <input
                type='text'
                placeholder='Entrez le description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type='number'
                placeholder='Enter price'
                value={pricePerDay}
                onChange={(e) => setPricePerDay(e.target.value)}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type='text'
                placeholder='Enter city'
                value={location.city}
                onChange={(e) =>
                  setLocation((prevLocation) => ({
                    ...prevLocation,
                    city: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Owner Name</label>
              <input
                type='text'
                placeholder='Enter owner name'
                value={ownerInfo.name}
                onChange={(e) =>
                  setOwnerInfo((prevOwnerInfo) => ({
                    ...prevOwnerInfo,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Owner Image</label>
              <input
                type='file'
                accept='image/*' // To restrict file types to images only
                onChange={uploadOwnerImageHandler}
              />
            </div>

            <div>
              <label>Owner Phone Number</label>
              <input
                type='text'
                placeholder='Enter owner phone number'
                value={ownerInfo.phoneNumber}
                onChange={(e) =>
                  setOwnerInfo((prevOwnerInfo) => ({
                    ...prevOwnerInfo,
                    phoneNumber: e.target.value,
                  }))
                }
              />
            </div>

            <div className='image-container'>
              {images.map((image, index) => (
                <div key={index} className='image-item'>
                  <img
                    src={image}
                    alt={`Product ${index}`}
                    className='product-image'
                  />
                  <button
                    type='button'
                    className='delete-image-button'
                    onClick={() => deleteImageHandler(index)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
            <input type='file' multiple onChange={uploadFileHandler} />
            {/* ... other input fields */}
            <div>
              <button
                type='submit'
                className='my-2'
                disabled={loadingUpdate || loadingUpload} // Disable during processing
              >
                {loadingUpdate || loadingUpload
                  ? 'En cours...'
                  : 'Mettre à jour'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ProductEdit
