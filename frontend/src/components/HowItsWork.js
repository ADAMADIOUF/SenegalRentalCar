import React, { useEffect } from 'react'
import BookingForm from './BookingForm'
import a from '../assets/work.png'
import b from '../assets/howitswork2.png'
import CarCategoriesSlider from './CarCategoriesSlider'
import { useLocation } from 'react-router-dom'

const HowItsWork = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className='how-its-work'>
      <div className='banner-how-its-work'>
        <div className='banner'>
          <img src={a} alt='' className='banner-img' />
        </div>
      </div>
      <BookingForm />
      <div className='howitswork-title section-center'>
        <h3>Comment fonctionne SenegalAutoMarket</h3>
        <div className='bg'></div>
      </div>
      <div className='container-howitswork section-center'>
        <article>
          <img src={b} alt='' />
        </article>
        <article>
          <div className='number-flex'>
            <div>
              <div className='number'>1</div>
            </div>
            <div>
              <h3>Trouvez la voiture parfaite</h3>
              <p>
                Entrez une localisation et une date, puis parcourez des milliers
                de voitures partagées par des hôtes locaux.
              </p>
            </div>
          </div>
          <div className='number-flex'>
            <div>
              <div className='number'>2</div>
            </div>
            <div>
              <h3>Réservez votre voyage</h3>
              <p>
                Réservez sur l'application Turo ou en ligne, choisissez un plan
                de protection et dites bonjour à votre hôte ! Annulation
                gratuite jusqu'à 24 heures avant votre voyage.
              </p>
            </div>
          </div>
          <div className='number-flex'>
            <div>
              <div className='number'>3</div>
            </div>
            <div>
              <h3>Prenez la route</h3>
              <p>
                Faites-vous livrer la voiture ou récupérez-la chez votre hôte.
                Enregistrez-vous avec l'application, prenez les clés et prenez
                la route !
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className='howits-work-last section-center'>
        <h2>Des options infinies</h2>
        <h3>
          Parcourez la plus grande place de marché de partage de voitures au
          monde
        </h3>
        <p>
          Qu'il s'agisse d'un SUV pour un voyage en famille, d'un pick-up pour
          quelques courses ou d'une voiture de sport classique pour une soirée
          spéciale, trouvez la voiture parfaite pour toutes sortes d'occasions
          et de budgets sur Turo.
        </p>
        <CarCategoriesSlider />
      </div>
    </div>
  )
}

export default HowItsWork
