import React from 'react'
import { FaCar, FaClock, FaCheck, FaExchangeAlt } from 'react-icons/fa' // Importing react-icons
import a from '../assets/about.png'

const About = () => {
  return (
   
    <div className='about section-center'>
      <div className='about-title'>
        <h3>À Propos</h3>
      </div>
      <div className='about-container'>
        <article className='about-details'>
          <h2>Bienvenue chez le service de location de voitures</h2>
          <p>
            Bienvenue dans notre service de location de voitures, où nous
            rendons vos voyages faciles et abordables. Notre mission est de
            fournir à nos clients la meilleure expérience possible en matière de
            location de voitures, en proposant une large sélection de véhicules
            de qualité, des tarifs compétitifs et un service client
            exceptionnel.
          </p>
          <div className='about-display'>
            <div>
              <span className='about-icon'>
                <FaCar />
              </span>
              <h3>La bonne voiture au bon prix</h3>
            </div>
            <div>
              <span className='about-icon'>
                <FaClock />
              </span>
              <h3>Locations à court et à long terme</h3>
            </div>
            <div>
              <span className='about-icon'>
                <FaCheck />
              </span>
              <h3>Facile, pratique et sans stress</h3>
            </div>
            <div>
              <span className='about-icon'>
                <FaExchangeAlt />
              </span>
              <h3>Options de location flexibles</h3>
            </div>
          </div>
        </article>
        <article className='about-img'>
          <img src={a} alt='' />
        </article>
      </div>
    </div>
  )
}

export default About
