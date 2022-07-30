import React from 'react'
import { BrowserRouter as BR, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Error from './components/error/Error'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'

const App = () => {
  return (

    <>
        
        <BR>
         <Header/>

         <Routes>
           <Route element={<Home/>} path='/'/>
           <Route element={<Menu/>} path='/menu'/>
           <Route element={<About/>} path='/about'/>
           <Route element={<Contact/>} path='/contact'/>
           <Route element={<Error/>} path='*'/>
         </Routes>

         <Footer/>
        </BR>
        
    </>


  )
}



export default App