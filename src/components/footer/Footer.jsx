import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-icon">
        <a href="www.instagram.com" className='ft-icon'>
          <FaInstagramSquare/>
        </a>
        <a href="www.twitter.com" className='ft-icon'>
          <FaTwitterSquare/>
        </a>
        <a href="www.facebook.com" className='ft-icon'>
          <FaFacebookSquare/>
        </a>
        <a href="www.linkedin.com" className='ft-icon'>
          <FaLinkedin/>
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2022 pizza_pinik.com!</p>
      </div>
    </footer>
  )
}

export default Footer

