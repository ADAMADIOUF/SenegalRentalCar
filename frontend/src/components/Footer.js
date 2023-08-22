import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links'>
        <div className='footer-section'>
          <h3>Senegal Auto Market</h3>
          <ul>
            <Link to={`/seller`}>
              <li>Vente de Voiture</li>
            </Link>
            <Link to={`/location`}>
              <li>Location de Voiture</li>
            </Link>
            <Link to={`/howitswork`}>
              <li>Comment fonctionne Marché Auto Sénégal</li>
            </Link>
            <Link to={`/contact`}>
              <li>Contact</li>
            </Link>
            <Link to={`/travel`}>
              <li>Récits de Voyage</li>
            </Link>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Locations</h3>
          <ul>
            <li>Fatick</li>
            <li>Dakar</li>
            <li>Mbour</li>
            <li>Thiès</li>
            <li>Kaolack</li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Explorer</h3>
          <ul>
            <li>Réserver une voiture</li>
            <li>Mariages</li>
            <li>Confiance et sécurité</li>
            <li>Durabilité</li>
            <li>Obtenir de l'aide</li>
            <li>Hébergement</li>
            <li>Listez votre voiture</li>
            <li>Carculator</li>
            <li>Hosts All-Star</li>
            <li>Outils pour les hôtes</li>
            <li>Assurance et protection</li>
          </ul>
        </div>
      </div>
      <div className='footer-social'>
        <FaFacebook className='social-icon' />
        <FaTwitter className='social-icon' />
        <FaInstagram className='social-icon' />
        <FaYoutube className='social-icon' />
      </div>
      <div className='footer-bottom'>
        <p>©2023 SenegalAutoMarket</p>
        <p>
          Conditions | Confidentialité | Plan du site | Préférences en matière
          de cookies
        </p>
        <p>Ne pas vendre ni partager mes informations personnelles</p>
      </div>
    </footer>
  )
}

export default Footer
