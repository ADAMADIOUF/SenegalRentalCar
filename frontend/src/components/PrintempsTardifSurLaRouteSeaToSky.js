import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import b from '../assets/weather.png' // Update with your image path

const PrintempsTardifSurLaRouteSeaToSky = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className='travelogue'>
      <h1>Printemps Tardif sur la Route Sea-to-Sky</h1>
      <div className='travelogue-details'>
        <img
          src={b}
          alt='Printemps Tardif sur la Route Sea-to-Sky'
          className='travelogue-image'
        />
        <div className='travelogue-content'>
          <h2>Exploration des Routes Pittoresques</h2>
          <p>
            Lors de notre aventure en voiture au printemps, nous avons découvert
            des paysages spectaculaires le long de la Route Sea-to-Sky. Les
            montagnes enneigées, les lacs turquoise et les forêts verdoyantes
            ont créé un tableau magnifique tout au long du voyage.
          </p>
          <p>
            Le printemps tardif apportait une nouvelle vie à la nature
            environnante. Les fleurs sauvages fleurissaient le long des sentiers
            de randonnée, et les cascades dévalaient les pentes des montagnes
            avec une énergie renouvelée.
          </p>
          <p>
            Nous nous sommes arrêtés dans de petits villages pittoresques en
            cours de route, où les habitants nous ont accueillis
            chaleureusement. Les marchés locaux regorgeaient de produits frais
            et artisanaux, offrant un aperçu authentique de la vie dans la
            région.
          </p>
          <p>
            Chaque nuit, nous nous sommes retirés dans des chalets confortables,
            entourés par la tranquillité de la nature. Les nuits étoilées
            étaient un spectacle à couper le souffle, avec la Voie lactée
            s'étendant au-dessus de nous.
          </p>
          <Link to={``}>Lire la suite</Link>
        </div>
      </div>
    </div>
  )
}

export default PrintempsTardifSurLaRouteSeaToSky
