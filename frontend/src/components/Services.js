import React from 'react'
import {
  FaCar,
  FaRoute,
  FaRoad,
  FaBook,
  FaMapMarkerAlt,
  FaPlane,
} from 'react-icons/fa' // Importing react-icons

const Services = () => {
  return (
    <div className='services section-center'>
      <div className='services-title'>
        <span>Découvrez nos</span> <h2>Services Populaires</h2>
      </div>
      <div className='container-services'>
        <article>
          <span className='services-icon'>
            <FaCar />
          </span>
          <h3>Transfert en Ville</h3>
          <p>
            Trajets rapides et sans tracas entre les destinations de la ville.
            Réservez dès maintenant pour un trajet confortable.
          </p>
        </article>
        <article>
          <span className='services-icon'>
            <FaRoute />
          </span>
          <h3>Tour Complet de la Ville</h3>
          <p>
            Découvrez la ville comme jamais auparavant avec nos visites guidées.
            Vivez le meilleur de la ville avec nous.
          </p>
        </article>
        <article>
          <span className='services-icon'>
            <FaRoad />
          </span>
          <h3>Location de Voiture sans Limites de Kilométrage</h3>
          <p>
            Pas de limites de kilométrage. Explorez la ville avec facilité et
            flexibilité. Réservez maintenant.
          </p>
        </article>
        <article>
          <span className='services-icon'>
            <FaBook />
          </span>
          <h3>Réservation Rapide et Facile</h3>
          <p>
            Réservez votre trajet en quelques minutes avec notre système de
            réservation facile à utiliser. Sans tracas et pratique.
          </p>
        </article>
        <article>
          <span className='services-icon'>
            <FaMapMarkerAlt />
          </span>
          <h3>Nombreux Points de Prise en Charge</h3>
          <p>
            Plusieurs points de prise en charge au choix, y compris les
            aéroports, les hôtels, et plus encore. Réservez dès maintenant.
          </p>
        </article>
        <article>
          <span className='services-icon'>
            <FaPlane />
          </span>
          <h3>Transfert vers l'Aéroport</h3>
          <p>
            Transferts vers l'aéroport sûrs et fiables. Réservez maintenant et
            profitez d'un trajet confortable et sans stress vers votre
            destination.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Services
