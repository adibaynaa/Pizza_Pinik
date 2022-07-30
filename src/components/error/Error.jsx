import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <div className='error'>
        <h1>404!</h1>
        <h2>Page not found!</h2>
        <h3>Try reloading</h3>
        <Link to='/'>Go back to Homepage</Link>
    </div>
  )
}

export default Error