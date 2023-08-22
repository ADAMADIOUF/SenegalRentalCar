import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import dataCategoriesCars from '../dataCategoriesCars'
import { Link, Route, Routes } from 'react-router-dom'

const CarCategoriesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className='slider-categories section-center'>
      <div className='title-slider-categories'>
        <h3>Parcourir par marque</h3>
      </div>
      <Slider {...settings}>
        {dataCategoriesCars.map((category) => (
          <div key={category._id} className='slider-item'>
            <Link to={category.link}>
              <img
                src={category.image}
                alt={category.name}
                className='slider-img'
              />
              <h4 className='slider-name'>{category.name}</h4>
            </Link>
          </div>
        ))}
      </Slider>
      {dataCategoriesCars.map((category) => (
        <Routes>
          {' '}
          {/* Wrap your Routes */}
          {dataCategoriesCars.map((category) => (
            <Route
              key={category._id}
              path={category.link}
              element={<div>{category.name} Content</div>}
            />
          ))}
        </Routes>
      ))}
    </div>
  )
}

export default CarCategoriesSlider
