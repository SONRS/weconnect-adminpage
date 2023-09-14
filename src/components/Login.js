import React from 'react'
import { Link } from 'react-router-dom'
import './css/Button.css'
import './css/Login.css'

class Login extends React.Component{
    state = {
        username:"",
        password:"",
        code:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.username === "" || this.state.password === "" || this.state.code === ""){
            alert("Please enter all the fields!");
            return
        }
        this.props.addLoginHandler(this.state);
        this.setState({username:"", password:"", code:""});
        // this.props.history.push("/user");
    };
    render(){
        return (
            <div className='input-areas'>
                    <form className='email-form' onSubmit={this.add}>
                        <div className='field'>
                            <label>Email: </label>
                            <input type="email"
                                name="email"
                                placeholder='Username'
                                className='email-input'
                                value = {this.state.username}
                                onChange={(e) => this.setState({username: e.target.value})}
                            />
                        </div>
                        <div className='field'>
                            <label>Password: </label>
                                
                                <input type="password"
                                    name="password"
                                    placeholder='Password'
                                    className='password-input'
                                    value = {this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}
                                />
                        </div>
                        <div className='field'>
                            <label>Code: </label>
                            <input type="INTEGER" 
                                name="org-code"
                                placeholder='Organisation Code'
                                className='code-input'
                                value = {this.state.code}
                                onChange={(e) => this.setState({code: e.target.value})}
                            />
                        </div>
                        
                        <div className='login-btn'>
                        {/* <button className='btn btn-primary'>LOGIN</button> */}
                            <Link to={{pathname: `/user/${this.state.username}`, state:{username: this.props.username}}}>
                            <button className='btn btn-primary'>LOGIN</button>
                            </Link>
                            
                        </div>
                    </form>
            </div>
                    // {/* <div className='password'>
                    //     <form>
                    //         <input type="password" name="password" placeholder='Enter Password'
                    //         className='password-input'/>
                    //     </form>
                    // </div>
                    // <div className='code'>
                    //     <form>
                    //         <input type="INTEGER" name="org-code" placeholder='Enter Organisation Code'
                    //         className='code-input'/>
                    //     </form>
                    // </div> */}
                    
                
        )
    }
  
}


export default Login;