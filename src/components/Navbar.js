import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='nav-content'>
          <div className='nav-logo'>
            <img src = '/images/weconnectlogo.png'/>
          </div>
          <Link to={{pathname: '/'}} className='no-underline'>
            <div className='logout'>
              <h2>Logout</h2>
              <img className='logouticon'
              src='/icons/box-arrow-right.svg'></img>
              </div>
            </Link>
          
          
        </div>
      </div>
    </>
  )
}

export default Navbar
