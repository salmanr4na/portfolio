import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
   <div className="contact-form-content">
    <form action="">
        <div className="name-container">
            <input type="text" name='firstname' placeholder='First Name' />
            <input type="text" name='lasttname' placeholder='Last Name' />
        </div>
        <input type="text" name='email' placeholder='Email' />
        <textarea name="massage" placeholder='Message' rows={3}></textarea>
        <button>Send</button>
    </form>
   </div>
  )
}

export default ContactForm