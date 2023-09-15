import React, { useEffect } from 'react'

import Banner from './Banner'
import BookingForm from './BookingForm'
import CarCategoriesSlider from './CarCategoriesSlider'
import FirstBanner from './FirstBanner'
import SecondBanner from './SecondBanner'

import ThirdBanner from './ThirdBanner'
import LastBanner from './LastBanner'
import Questions from './Questions'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div>
      <Banner />
      <BookingForm />
      <About/>
      <Services/>
      <div className='first-title section-center'>
        <h2>Trouvez votre Conducteur</h2>
        <p>
          Explorez la plus grande place de marché de partage de voitures au
          Sénégal
        </p>
        <div className='bg'></div>
      </div>
      <CarCategoriesSlider />
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
      <LastBanner />
      <Questions />
     <Testimonials/>
    </div>
  )
}

export default Home