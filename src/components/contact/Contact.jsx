import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-content">
        <div className="con-img">
          {/* <img src={Contact01} alt="contact" /> */}
        </div>
        <div className="con-header">
          <h1>Contact Us</h1>
          <form action='https://formsubmit.co/adiba180228@gmail.com' method='POST'>
            <input type="text" placeholder='Your Full Name:' />
            <input type="email" placeholder='Your Email Address:' />
            <textarea placeholder='Your Message Here...'></textarea>
            <button type='submit' className='con-btn' target='_blank'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact