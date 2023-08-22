import React, { useState } from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import { Link, useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import{AiTwotoneHeart} from "react-icons/ai"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { addFavorite, removeFavorite } from '../slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'


const DetailsPage = () => {
  const dispatch = useDispatch()
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: 0,
    lng: 0,
  }
  const favoriteProductIds = useSelector((state) => state.favorites)
  const [favoriteMessage, setFavoriteMessage] = useState('')
 const [showMessage, setShowMessage] = useState(false)
 const [message, setMessage] = useState('')
  const toggleFavorite = (productId) => {
    if (favoriteProductIds.includes(productId)) {
      dispatch(removeFavorite(productId))
      setMessage('Removed from your favorites')
    } else {
      dispatch(addFavorite(productId))
      setMessage('Saved to your favorites')
    }

    setShowMessage(true)

    // Clear the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false)
      setMessage('')
    }, 5000)
  }
  const { data: products, isLoading, isError } = useGetProductsQuery()
const location = useLocation()
const bookingData = location.state
  if (!bookingData) {
    return <div className='details-page'>Error: No booking data available</div>
  }

  const { city, startDate, endDate } = bookingData

  if (isLoading) {
    return <div className='details-page'>Loading...</div>
  }

  if (isError) {
    return <div className='details-page'>Error: Failed to fetch products</div>
  }
   
  const filteredProducts = products.filter((product) => product.city === city)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className='details-page'>
      <h2 className='details-header'>Details Page</h2>
      <p className='details-info'>City: {city}</p>
      <p className='details-info'>Start Date: {startDate.toISOString()}</p>
      <p className='details-info'>End Date: {endDate.toISOString()}</p>
      {showMessage && <p className='message'>{message}</p>}
      {filteredProducts.length === 0 ? (
        <div>
          <p className='details-info'>No cars found for the selected city</p>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={2}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <div className='details-products'>
          {filteredProducts
            .filter((product) => product.category !== 'sell') // Filter out products with "category" value as "sell"
            .map((product) => (
              <div key={product._id} className='product-card'>
                <Link
                  to={`/details/${
                    product._id
                  }?city=${city}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`}
                >
                  <h3>{product.model}</h3>
                  <Slider {...sliderSettings}>
                    {product.images.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt=''
                        className='product-image'
                      />
                    ))}
                  </Slider>
                  <div className='details-heart'>
                    <h3>{product.pricePerDay}CFA/jour</h3>
                    <button
                      onClick={(e) => {
                        e.preventDefault() // Prevent link navigation
                        toggleFavorite(product._id)
                      }}
                      className={`favorite-button ${
                        favoriteProductIds.includes(product._id)
                          ? 'favorited-heart'
                          : 'unfavorited-heart'
                      }`}
                    >
                      <AiTwotoneHeart />
                    </button>
                    <LoadScript
                      googleMapsApiKey={
                        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
                      }
                    >
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={2}
                      >
                        <Marker position={center} />
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default DetailsPage
