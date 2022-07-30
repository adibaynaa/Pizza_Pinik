import React from 'react'
import Menu01 from '../../assets/menu1.jpg'
import Menu02 from '../../assets/menu2.jpg'
import Menu03 from '../../assets/menu3.jpg'
import Menu04 from '../../assets/menu4.jpg'
import Menu05 from '../../assets/menu5.jpg'
import Menu06 from '../../assets/menu6.jpg'
import './menu.css'

const menudata =[
  {
    image:Menu01,
    name:'Pepperoni Pizza',
    price:'$ 15.99'
  },

  {
    image:Menu02,
    name:'Margherita Pizza',
    price:'$ 11.99'
  },

  {
    image:Menu03,
    name:'PedroTech Pizza',
    price:'$ 56.53'
  },

  {
    image:Menu04,
    name:'Vegan Pizza',
    price:'$ 17.99'
  },

  {
    image:Menu05,
    name:'Pineapple Pizza',
    price:'$ 40.00'
  },

  {
    image:Menu06,
    name:'Special Pizza',
    price:'$ 199.99'
  },
]

const Menu = () => {
  return (
    <section id='menu'>
      <div className="container menu__container">
        <h1>Our Menu</h1>
        <div className="menu-content">
          {
            menudata.map(({image, name, price, index})=>{
              return(
                <div key={index} className="menu-col">
                  <div className="menu-img">
                    <img src={image} alt="menu01" />
                  </div>
                  <h3>{name}</h3>
                  <small>{price}</small>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Menu