import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <div className="header-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar">
          <Link to ='/' className='lin'>Home</Link>
          <Link to ='/menu' className='lin'>Menu</Link>
          <Link to ='/about' className='lin'>About</Link>
          <Link to ='/contact' className='lin'>Contact</Link>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header