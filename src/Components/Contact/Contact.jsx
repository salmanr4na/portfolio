import React from 'react'
import './Contact.css'
import InfoCard from './InfoCard/InfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
   <div className="contact-container">
    <h2>Contact Me</h2>
    <div className="contact-content">
    <div style={{flex:1}}>
      <InfoCard
      Icon="./assets/img/mail-icon.png"
      Text="raosalmantnb@gmail.com"/>
      <InfoCard
      Icon="./assets/img/linkedin-icon.png"
      Text="linkedin.com/salman-rana-b90587273"/>
    </div>
    <div style={{flex:1}}>
      <ContactForm/>
    </div>
    </div>
   </div>
  )
}

export default Contact