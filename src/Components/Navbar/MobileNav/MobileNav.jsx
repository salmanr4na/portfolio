import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}>
        <div className="mobile-menu-container">
        <a href="/home"className='logo'>Salman <span>Rana</span></a>
      <ul>
        <li>
          <a className='menu-item'>Home</a>
        </li>
        <li>
          <a className='menu-item'>About Me</a>
        </li>
        <li>
          <a className='menu-item'>Skills</a>
        </li>
        <li>
          <a className='menu-item'>Projects</a>
        </li>
        <li>
          <a className='menu-item'>Contact Me</a>
        </li>

        <button className='contact-btn mobile-btn' target='blank' href="https://e-mailer.link/100215440439" onClick={()=>{}}> Hire Me</button>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav