import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section id='home'>
        <div className="container home__container">
          <div className="home-content">
            <h1>Pizza_Pinik</h1>
            <h3>Pizza To Fit Any Taste</h3>
            <button className='home-btn'>Order Now</button>
          </div>
        </div>
    </section>
  )
}

export default Home