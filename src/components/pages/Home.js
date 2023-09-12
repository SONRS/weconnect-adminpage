import React, { useState, useEffect} from 'react'
import '../css/HeroSection.css';
import Login from '../Login';
import '../css/App.css'


function HeroSection() {
  const LOCAL_STORAGE_KEY = "userLogs"
  const [userLogs, setUserLogs] = useState([]);
  const addLoginHandler = (userLog) => {
    console.log(userLog);
    setUserLogs([...userLogs, userLog])
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userLogs));
  }, [userLogs]);
 

  return (
    
    <div className='hero-container'>
      <div className='left-display'>
            <img className = 'background' src="https://www.volunteeringvictoria.org.au/wp-content/uploads/2022/04/rap-artwork-2.png "/>
            <img className = 'mainlogo'  src = "/images/weconnectlogo.png"></img>
            <h1>WELCOME!</h1>
            <p className='welcome-body'>WeConnect Administrator</p>
            <div className='left-bottom'>
              <p>A joint initiative by:</p>
              <img className='joint-logo' src="/images/volwestvolvic.png"></img>

            </div>
      </div>
      
      <div className='loginbox'>
            <div className='text'>
              <p className='loginbox-txt'>LOGIN AS ADMINISTRATOR</p>
              <img className='groupimage' src = '/images/group2.png'></img>
            </div>
            {/* <Login/> */}
            <Login addLoginHandler={addLoginHandler}/>              
      </div>
    </div>
  )
}

export default HeroSection
