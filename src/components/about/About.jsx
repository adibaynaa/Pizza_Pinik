import React from 'react'
import About01 from '../../assets/aboutleft.jpeg'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className="about-banner"></div>
      <div className="container about__container">
        <div className="about-content">
          <div className="about-img">
            <img src={About01} alt="about" />
          </div>
          <div className="about-header">
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est odit, doloremque quod consequuntur quisquam magnam tenetur sunt minus, placeat voluptates vel nihil praesentium alias accusamus distinctio laboriosam quam recusandae obcaecati officia commodi tempora sed nam similique. Assumenda velit tempore omnis veritatis magni sapiente animi explicabo ab? Delectus molestias a quam?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About