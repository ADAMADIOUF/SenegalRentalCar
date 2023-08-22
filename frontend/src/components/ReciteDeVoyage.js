import React, { useEffect } from 'react'
import scenicRoadImage from '../assets/scenicRoadImage.png'
import villageImage from '../assets/villageImage.png'
import lunchImage from '../assets/lunchImage.png'
import cabinImage from '../assets/cabinImage.png'
import starryNightImage from '../assets/starryNightImage.png'
import { useLocation } from 'react-router-dom'

const ReciteDeVoyage = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className='recite-de-voyage section-center'>
      <h1>Récit de Voyage</h1>
      <div className='travel-story'>
        <h2>Exploration des Routes Pittoresques</h2>
        <div className='container-recit'>
          <article>
            <p>
              Lors de notre aventure en voiture à travers les magnifiques
              paysages, nous avons découvert des routes pittoresques et des
              panoramas à couper le souffle. Le voyage a commencé au lever du
              soleil, avec une brise fraîche et une tasse de café chaud à portée
              de main.
            </p>
            <img
              src={scenicRoadImage}
              alt='Scenic Road'
              className='story-image'
            />
          </article>
          <article>
            <p>
              Les montagnes majestueuses se dressaient devant nous, et chaque
              virage révélait une nouvelle vue panoramique. Nous avons traversé
              de petits villages pittoresques où les habitants nous ont
              accueillis avec des sourires chaleureux.
            </p>
            <img src={villageImage} alt='Village' className='story-image' />
          </article>
          <article>
            <p>
              Les pauses déjeuner étaient tout aussi mémorables, avec des arrêts
              dans des auberges locales offrant une cuisine authentique de la
              région. Les après-midis étaient réservés à explorer des sentiers
              de randonnée et à admirer la beauté naturelle qui nous entourait.
            </p>
            <img src={lunchImage} alt='Lunch' className='story-image' />
            <p>
              Chaque nuit, nous nous sommes retrouvés dans des logements
              charmants, des chalets en bois nichés au cœur de la nature. Le
              ciel nocturne était spectaculaire, avec des milliers d'étoiles
              scintillantes au-dessus de nous.
            </p>
            <img src={cabinImage} alt='Cabin' className='story-image' />
          </article>
          <article>
            <p>
              Notre aventure en voiture nous a laissé des souvenirs
              inoubliables, des paysages à couper le souffle et une connexion
              profonde avec la nature. Cette expérience a été bien plus qu'un
              simple voyage en voiture, c'était une aventure pour l'âme.
            </p>
            <img
              src={starryNightImage}
              alt='Starry Night'
              className='story-image'
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export default ReciteDeVoyage
