import React from 'react'
import a from '../assets/hand.png'
import b from '../assets/key.png'

const LastBanner = () => {
  return (
    <div className='last-banner section-center'>
      <div className='last-banner-container'>
        <img src={b} alt='' className='last-banner-image' />
        <h1>Louez une voiture</h1>
        <p>
          Que ce soit dans la rue ou à travers le pays, trouvez le véhicule
          parfait pour votre prochaine aventure.
        </p>
        <img src={a} alt='' className='last-banner-image' />
        <h1>Devenez hôte</h1>
        <p>
          Accélérez votre esprit d'entrepreneur et commencez à construire une
          petite entreprise de partage de voitures sur Turo.
        </p>
      </div>
    </div>
  )
}

export default LastBanner
