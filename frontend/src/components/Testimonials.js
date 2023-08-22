import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className='testimonials-slider'>
      <h2>Témoignages de nos Clients</h2>
      <Slider {...settings}>
        <div className='testimonial'>
          <p className='testimonial-text'>
            "Service incroyable ! La voiture était propre et confortable. Tout
            le processus de location s'est déroulé en douceur et sans tracas."
          </p>
          <h4 className='testimonial-author'>Abdou Fall</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            "J'ai eu une excellente expérience en louant une voiture ici. Le
            personnel était amical et les prix étaient raisonnables."
          </p>
          <h4 className='testimonial-author'>Amadou Ndiaye</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            "Hautement recommandé ! La sélection de voitures est excellente et
            le service client est exceptionnel."
          </p>
          <h4 className='testimonial-author'>Aminata Ba</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            "Super expérience ! Les voitures étaient en excellent état et le
            processus de réservation était simple."
          </p>
          <h4 className='testimonial-author'>Sophie Diouf</h4>
        </div>
        <div className='testimonial'>
          <p className='testimonial-text'>
            "Service fiable et professionnel. Je recommande vivement pour vos
            besoins de location de voiture."
          </p>
          <h4 className='testimonial-author'>Lamine Samba</h4>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonials
