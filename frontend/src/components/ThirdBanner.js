import React from 'react'
import { Link } from 'react-router-dom'
import b from '../assets/third-banner2.png'

const ThirdBanner = () => {
  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = '/travel'
  }
  const handleClickTwo = (event) => {
    event.preventDefault()
    window.location.href = '/weather'
  }
  return (
    <div className='third-banner section-center'>
      <div className='third-banner-title'>
        <h3>Nourrissez vos rêves</h3>
        <div className='bg'></div>
        <p>
          Éveillez votre envie d'évasion avec des chroniques photo de voyages en
          voiture de rêve.
        </p>
        <Link to={`/travel`} onClick={handleClick}>
          <button className='btn'>Explorer les Récits de Voyage</button>
        </Link>
      </div>
      <div className='third-banner-img'>
        <div className='third-banner-big-img'>
          <img src={b} alt='' />
          <div className='third-banner-details'>
            <h3>Récit de voyage à la une</h3>
            <h2>Printemps tardif sur la route Sea-to-Sky</h2>
            <Link to={`/weather`}onClick={handleClickTwo}>En savoir plus</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdBanner
