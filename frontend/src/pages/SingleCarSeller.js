import React, { useState } from 'react'
import ScrollProgressBar from 'react-scroll-progress-bar'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import { useParams } from 'react-router-dom'
import WhatsAppWidget from '../components/WhatsApp'
import 'react-whatsapp-widget/dist/index.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import {
  FaCar,
  FaWhatsapp,
  FaPhoneAlt,
  FaTachometerAlt,
  FaCog,
  FaGasPump,
  FaExchangeAlt,
  FaExclamationCircle,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const SingleCarSeller = () => {
  const { id: productId } = useParams()
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId)

  const handleAddToCart = () => {
    const message = `Je veux acheter ${product.make} ${product.model} ${product.pricePerDay}CFA`
    const url = `https://wa.me/+221775190104?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  if (isLoading) {
    return <div>Chargement en cours...</div>
  }

  if (isError) {
    return <div>Erreur : Impossible de récupérer les détails du produit</div>
  }

  return (
    <div className='single-detail'>
      <AwesomeSlider className='custom-slider'>
        {product.images.map((photo, index) => (
          <div key={index} data-src={photo} />
        ))}
      </AwesomeSlider>
      <div className='single-detail-container'>
        <article>
          <h2>
            {product.make} {product.model}
          </h2>
          <p>Description : {product.description}</p>
          <p>Prix  : {product.pricePerDay} CFA </p>
          <h3>Informations supplémentaires :</h3>
          <p>
            <FaExclamationCircle className='icon' /> Année : {product.year}
          </p>
          <p>
            <FaMapMarkerAlt className='icon' /> Ville : {product.city}
          </p>
          <p>Caractéristiques : {product.features.join(', ')}</p>
          <div className='owner'>
            <div>
              <h3>Informations du propriétaire :</h3>
              <p>Nom : {product.ownerInfo.name}</p>
              <p>
                <FaPhoneAlt className='icon' /> Numéro de téléphone :{' '}
                {product.ownerInfo.phoneNumber}
              </p>
              <img src={product.ownerInfo.image} alt={product.ownerInfo.name} />
            </div>
          </div>
        </article>

        <article>
          <div>
            <h3>Plus de détails :</h3>
            <p>
              <FaCar className='icon' /> Couleur : {product.color}
            </p>
            <p>
              <FaExchangeAlt className='icon' /> Transmission :{' '}
              {product.transmission}
            </p>
            <p>
              <FaGasPump className='icon' /> Type de carburant :{' '}
              {product.fuelType}
            </p>
            <p>
              <FaCog className='icon' /> Moteur : {product.engine}
            </p>
            <p>
              <FaTachometerAlt className='icon' /> Kilométrage :{' '}
              {product.mileage}
            </p>
            <button className='btn btn-commander' onClick={handleAddToCart}>
              <FaWhatsapp className='icon' /> Commander
            </button>
            {showWhatsAppWidget && (
              <WhatsAppWidget
                phoneNumber='+221750132750'
                message={`Je veux acheter ${product.model}/${product.pricePerDay}CFA`}
              />
            )}
          </div>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              center={{
                lat: product.location.coordinates[1],
                lng: product.location.coordinates[0],
              }}
              zoom={10}
              mapContainerClassName='map-container'
            >
              <Marker
                position={{
                  lat: product.location.coordinates[1],
                  lng: product.location.coordinates[0],
                }}
              />
            </GoogleMap>
          </LoadScript>
        </article>
      </div>
      <ScrollProgressBar bgColor='#ff8000' />
      <div className='rating'>
        <h2>{product.rating ? product.rating.toFixed(1) : 'N/A'}</h2>
        <p>({product.ratingCount} évaluations)</p>

        {product.ratings.map((rating, index) => (
          <div key={index} className='individual-rating'>
            <p className='rating-category'>{rating.category}</p>
            <div className='rating-bar'>
              <CircularProgressbar
                value={(rating.value / 5) * 100}
                text={rating.value.toFixed(1)}
                styles={{
                  path: {
                    stroke: '#ff8000',
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='rain-container'>
        {Array.from({ length: 50 }, (_, index) => (
          <div
            key={index}
            className='raindrop'
            style={{
              left: `${index * 2}%`,
              animationDelay: `${index * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SingleCarSeller
