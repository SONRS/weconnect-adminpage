import React, { useState } from 'react'
import './HeroSection.css';
import '../App.css'
import { Button } from './Button';


function HeroSection() {
    const [button, setButton] = useState(true)
    const showButton = () => {
        if(window.innerWidth<= 0){
            setButton(false)
        }else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);
  return (
    
    <div className='hero-container'>
      <div className='left-display'>
            <img className = 'background' src="https://www.volunteeringvictoria.org.au/wp-content/uploads/2022/04/rap-artwork-2.png "/>
            <img className = 'mainlogo'  src = "/weconnectlogo.png"></img>
            <h1>WELCOME!</h1>
            <p className='welcome-body'>WeConnect Administrator</p>
      </div>
      
      <div className='loginbox'>
        
            <div className='text'>
                <p className='loginbox-txt'>LOGIN AS ADMINISTRATOR</p>
                <img className='groupimage' src = '/group2.png'></img>
            </div>
            
            <div className='input-areas'>
                
                <div className='email'>
                    <form>
                        <input type="email" name="email" placeholder='Username'
                        className='email-input'/>
                    </form>
                </div>
                <div className='password'>
                    <form>
                        <input type="password" name="password" placeholder='Enter Password'
                        className='password-input'/>
                    </form>
                </div>
                <div className='code'>
                    <form>
                        <input type="INTEGER" name="org-code" placeholder='Enter Organisation Code'
                        className='code-input'/>
                    </form>
                </div>
                <div className='login-button'>
                    {button && <Button>LOG IN</Button>}
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default HeroSection
