import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <img className='nav-logo' src='/images/weconnectlogo.png'/>
            
        </div>

      </nav>
    </>
  )
}

export default Navbar
