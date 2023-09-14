import React from 'react'
import './css/SubNavbar.css'
import { Link} from 'react-router-dom'

function SubNavbar() {
  return (
    <>
      <div className='sub-navbar'>
        <div className='subnav-content'>
          <div className='stats'>
            <img src='/icons/graph-down.svg'></img>
              <h2
              style={{color: '#b21022'}}>Statistics</h2>
          </div>
          <div className='questions'>
          <img src='/icons/patch-question.svg'></img>
            <h2
            style={{color: '#b21022'}}
            >Questions</h2>
          </div>
          <div className='user'>
          <img src='/icons/person-circle.svg'></img>
            <h2
            style={{color: '#b21022'}}>User</h2>
          </div>
          </div>
        </div>
        
      
    </>
  )
}

export default SubNavbar
