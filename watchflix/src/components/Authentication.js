// komen
import React ,{useState} from 'react'
import email_icon from "../images/email.png"
import  password_icon from "../images/password.png"
import user_icon from "../images/person.png"



function Authentication() {
    const [action, setAction]=useState("Sign Up");
  return (
    <div className='container'> 
    <div className='header'>
    <div className='text'>{action}</div>
    <div className='underline'> </div>
    </div>
    <div className='inputs'>
    <div className='inputs'>
        <img src= {user_icon} alt=''/>
        <input type='text' placeholder='Name'/>
        </div>  
        <div className= 'inputs'>
        <img src={email_icon} alt=''/>
        <input type='email' placeholder='Email Id'/>
        </div> 
        <div className='inputs'>
        <img src={password_icon} alt=''/>
        <input type='password' placeholder='Password'/>
        </div>   
    </div>
    <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
          <div className='submit-container'>
             <div className={action === "Login"?"submit gray":"submit"}>Sign Up</div>
             <div className={action === "Sign Up"?"submit gray":"submit"}>Login</div>
          </div>
    </div>

  )
}
export default Authentication;