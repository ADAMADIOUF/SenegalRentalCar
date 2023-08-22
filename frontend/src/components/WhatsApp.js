import React from 'react'
import 'react-whatsapp-widget/dist/index.css'

const WhatsAppWidget = ({ phoneNumber, message }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`)
  }

  return (
    <div className='whatsapp-widget'>
      <button onClick={handleClick}>
        <i className='fab fa-whatsapp'></i> WhatsApp
      </button>
    </div>
  )
}

export default WhatsAppWidget
