import React from 'react'
import './InfoCard.css'

const InfoCard = ({Icon,Text}) => {
  return (
    <div className="contact-detail-card">
      <div className="icon">
        <img src={Icon} alt={Text} />
      </div>
      <p>{Text}</p>
    </div>
  )
}

export default InfoCard