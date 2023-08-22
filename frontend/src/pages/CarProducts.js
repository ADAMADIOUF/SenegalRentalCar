import React from 'react'
import { useGetProductsQuery } from '../slices/productsApiSlice'

import BookingForm from '../components/BookingForm'

const CarProducts = () => {
  const {
    data: products,
    isLoading: loading,
    isError: error,
  } = useGetProductsQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <div className='section-center'>
     
      <h2>Car Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              {product.make} {product.model}
            </h3>
            <p>Year: {product.year}</p>
            <p>Type: {product.type}</p>
            <p>Rental Rate: {product.rentalRate}</p>
            <img src={product.photos[0]} alt='' />
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  )
}
 
export default CarProducts
