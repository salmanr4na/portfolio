import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

  const [openManu, setOpenMenu] = useState(false);
  const toggleMenu  = ()=>{
    setOpenMenu(!openManu);
  };
  return (
    <>
    <MobileNav isOpen={openManu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
    <div className="nav-content">
    <a href="/home"className='logo'>Salman <span>Rana</span></a>
      <ul>
        <li>
          <a href="/" className='menu-item'>Home</a>
        </li>
        <li>
          <a href="/" className='menu-item'>About Me</a>
        </li>
        <li>
          <a href="/" className='menu-item'>Skills</a>
        </li>
        <li>
          <a href="/" className='menu-item'>Projects</a>
        </li>
        <li>
          <a href="/" className='menu-item'>Contact Me</a>
        </li>
        <button className='contact-btn' onClick={()=>{}}> <a className='hyper' target='blank' href="https://e-mailer.link/100215440439">Hire Me</a> </button>
      </ul>
      <button className='menu-btn'onClick={toggleMenu}>
        {openManu ? <i class='bx bx-x'></i> : <i class='bx bx-menu'></i>}
      </button>
    </div>
    </nav>
    </>
  )
}

export default Navbar