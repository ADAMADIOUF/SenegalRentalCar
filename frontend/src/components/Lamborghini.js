import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import { Link, useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { AiTwotoneHeart } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { addFavorite, removeFavorite } from '../slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'

const Lamborghini = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  const dispatch = useDispatch()
  const favoriteProductIds = useSelector((state) => state.favorites)
  const [favoriteMessage, setFavoriteMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const toggleFavorite = (productId) => {
    if (favoriteProductIds.includes(productId)) {
      dispatch(removeFavorite(productId))
      setFavoriteMessage('Retiré de vos favoris')
    } else {
      dispatch(addFavorite(productId))
      setFavoriteMessage('Enregistré dans vos favoris')
    }

    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
      setFavoriteMessage('')
    }, 5000)
  }

  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) {
    return <div className='details-page'>Loading...</div>
  }

  if (isError) {
    return <div className='details-page'>Error: Failed to fetch products</div>
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
    (product) => product.category === 'sell' && product.make === 'Lamborghini'
  )

  return (
    <div className='details-page section-center'>
      <h2 className='seller-car-title'>Vente de Voiture</h2>
      {showMessage && <p className='message'>{favoriteMessage}</p>}
      {productToyota.length === 0 ? (
        <div>
          <p className='details-info'>
            No Aucune voiture trouvée pour la ville sélectionnée
          </p>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={{ lat: 0, lng: 0 }}
              zoom={2}
            >
              <Marker position={{ lat: 0, lng: 0 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <div className='details-products'>
          {productToyota.map((product) => (
            <div key={product._id} className='product-card'>
              <Link to={`/seller/${product._id}`}>
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
                <h3>{product.pricePerDay} CFA</h3>
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
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                    center={{ lat: 0, lng: 0 }}
                    zoom={2}
                  >
                    <Marker position={{ lat: 0, lng: 0 }} />
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

export default Lamborghini
