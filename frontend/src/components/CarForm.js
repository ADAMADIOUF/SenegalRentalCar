import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiOutlineSearch } from 'react-icons/ai'

const CarForm = ({
  city,
  handleCityChange,
  startDate,
  handleStartDateChange,
  endDate,
  handleEndDateChange,
  product,
}) => {
  return (
    <form>
      <label htmlFor='city'>Where:</label>
      <input
        type='text'
        id='city'
        value={city}
        onChange={handleCityChange}
        placeholder='Enter city...'
        required
        className='input-form'
      />

      <article>
        <label htmlFor='startDate'>From:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat='yyyy-MM-dd'
          placeholderText='Select start date...'
          required
          className='input-form'
        />
      </article>

      <article>
        <label htmlFor='endDate'>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat='yyyy-MM-dd'
          placeholderText='Select end date...'
          required
          className='input-form'
        />
      </article>

      <button type='submit' className='search-btn'>
        <span className='search-text-mobile'>Search for cars</span>
        <AiOutlineSearch />
      </button>

      <Link
        to={{
          pathname: `/details/${product._id}`,
          state: { city, startDate, endDate },
        }}
      >
        {/* Rest of your product card content */}
      </Link>
    </form>
  )
}

export default CarForm
