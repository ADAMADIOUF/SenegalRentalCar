import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { Link, useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { AiTwotoneHeart } from 'react-icons/ai'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { addFavorite, removeFavorite } from '../slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'

const CarLocation = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const [errorMessage, setErrorMessage] = useState('')

  const [formFilled, setFormFilled] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (startDate && endDate) {
      setFormFilled(true)
      setShowMessageDate(true) // Show the message when form is submitted
      setTimeout(() => {
        setShowMessageDate(false) // Hide the message after 5 seconds
      }, 5000)
    }
  }

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
  const [showMessageDate, setShowMessageDate] = useState(false)

  const [message, setMessage] = useState('')
  const toggleFavorite = (productId) => {
    if (favoriteProductIds.includes(productId)) {
      dispatch(removeFavorite(productId))
      setMessage('Retiré de vos favoris')
    } else {
      dispatch(addFavorite(productId))
      setMessage('Enregistré dans vos favoris')
    }

    setShowMessage(true)

    // Clear the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false)
      setMessage('')
    }, 5000)
  }
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div className='details-page'>Chargement en cours...</div>
  }

  if (isError) {
    return (
      <div className='details-page'>
        Erreur : Échec de la récupération des produits
      </div>
    )
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  const productToyota = products.filter(
    (product) => product.category === 'location'
  )
  return (
    <div className='details-page'>
      <div className='booking-form-car'>
        <form onSubmit={handleFormSubmit} className='form-container-car'>
          <div>
            <label htmlFor='startDate'>Date de début :</label>
            <DatePicker
              id='startDate'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label htmlFor='endDate'>Date de fin :</label>
            <DatePicker
              id='endDate'
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <button type='submit' className='btn-car'>
            Choisir la date
          </button>
        </form>
      </div>
      <h2 className='seller-car-title'>Location de voiture</h2>
      {showMessageDate && <p className='message'>Date choisie avec succès !</p>}

      {showMessage && <p className='message'>{message}</p>}
      {productToyota.length === 0 ? (
        <div>
          <p className='details-info'>
            Aucune voiture trouvée pour la ville sélectionnée
          </p>
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
          {productToyota.map((product) => (
            <div key={product._id} className='product-card'>
              <Link
                to={
                  formFilled
                    ? {
                        pathname: `/details/${product._id}`,
                        search: `?startDate=${encodeURIComponent(
                          startDate.toISOString()
                        )}&endDate=${encodeURIComponent(
                          endDate.toISOString()
                        )}`,
                      }
                    : null
                }
                onClick={(e) => {
                  if (!formFilled) {
                    e.preventDefault()
                    setErrorMessage("Veuillez d'abord remplir le formulaire.")
                  }
                }}
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
              </Link>

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
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarLocation
