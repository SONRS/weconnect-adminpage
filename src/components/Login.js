import React from 'react'
import './css/Button.css'
import './css/Login.css'

class Login extends React.Component{
    render(){
        return (
            <div>
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
                    <div className='login-btn'>
                        <button onClick={()=>console.log('clicked')} className='btn btn-primary'>LOGIN</button>
                    </div>
                </div>
            </div>
          )
    }
  
}


export default Login;