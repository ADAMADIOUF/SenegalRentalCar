import React from 'react'
import b from '../assets/s-banner.png'
import { Link } from 'react-router-dom'

const SecondBanner = () => {
  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = '/location'
  }
  return (
    <div className='second-banner section-center'>
      <div className='second-banner-container '>
        <article className='first-banner-img'>
          <img src={b} alt='' className='second-banner-img' />
        </article>
        <article className='second-banner-details'>
          <h3>
            Trouvez la voiture parfaite <span>pour conquérir la nature</span>
          </h3>
          <p>
            Partez préparé dans un robuste 4x4 pour affronter les routes
            hivernales en toute facilité, ou dans un van aménagé pour vous
            emmener au cœur de la nature.
          </p>
          <p>
            Optez pour une expérience unique en louant un véhicule qui répond à
            vos besoins. Que ce soit pour une escapade en montagne, un road trip
            côtier ou une exploration urbaine, SenegalAutoMarket vous offre une
            gamme diversifiée de véhicules pour chaque occasion.
          </p>
          <p>
            Notre équipe de chauffeurs expérimentés est là pour vous offrir une
            conduite sûre, confortable et fiable. Que vous ayez besoin d'un
            chauffeur pour vos déplacements quotidiens, vos sorties en ville ou
            vos événements spéciaux, notre équipe est prête à vous conduire en
            toute confiance.
          </p>
          <p>
            Tous nos chauffeurs sont soigneusement sélectionnés et formés pour
            garantir un service exceptionnel. Profitez d'une expérience de
            conduite sans tracas avec SenegalAutoMarket.
          </p>
          <Link to={`/location`} onClick={handleClick}>
            <button className='btn first-banner-btn'>
              Parcourir les voitures
            </button>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default SecondBanner
