import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
  const navigate = useNavigate()
  const [city, setCity] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleCityChange = (event) => {
    const inputCity = event.target.value
    const formattedCity =
      inputCity.charAt(0).toUpperCase() + inputCity.slice(1).toLowerCase()
    setCity(formattedCity)
  }
  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  const handleSubmit = () => {
    // Naviguer vers la page de détails avec la ville et les dates saisies
    navigate('/details', { state: { city, startDate, endDate } })
  }

  return (
    <div className='booking-form'>
      <form onSubmit={handleSubmit} className='form-container'>
        <article className='booking-form-find'>
          Trouvez votre meilleure voiture ici
        </article>
        <article>
          <label htmlFor='city'>Où :</label>
          <input
            type='text'
            id='city'
            value={city}
            onChange={handleCityChange}
            placeholder='Entrez la ville...'
            required
            className='input-form'
          />
        </article>
        <article>
          <label htmlFor='startDate'>Du :</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat='yyyy-MM-dd'
            placeholderText='Sélectionnez la date de début...'
            required
            className='input-form'
          />
        </article>
        <article>
          <label htmlFor='endDate'>Au :</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat='yyyy-MM-dd'
            placeholderText='Sélectionnez la date de fin...'
            required
            className='input-form'
          />
        </article>
        <button type='submit' className='btn'>
          <span className='search-text-mobile'>Rechercher des voitures</span>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default BookingForm
