import React from 'react'
import b from '../assets/f-banner.png'
import { Link, useNavigate } from 'react-router-dom'

const FirstBanner = () => {
  const handleClick = (event) => {
    event.preventDefault()  
    window.location.href = '/contact'
  }
  return (
    <div className='first-banner '>
      <div className='first-banner-container section-center'>
        <article>
          <h3>SenegalAutoMarket Est Certifié Neutre En Carbone</h3>
          <p>
            Conduisez et partagez des voitures en sachant que votre empreinte
            carbone est compensée par des projets de réduction des gaz à effet
            de serre. Les voyages neutres en carbone sur SenegalAutoMarket sont
            maintenant vérifiés avec une certification neutre en carbone !
          </p>
          <Link to={`/contact`} onClick={handleClick}>
            <button className='btn first-banner-btn'>
              Explorez la durabilité sur SenegalAutoMarket
            </button>
          </Link>
        </article>
        <article className='first-banner-img'>
          <img src={b} alt='' className='first-banner-img' />
        </article>
      </div>
    </div>
  )
}

export default FirstBanner
