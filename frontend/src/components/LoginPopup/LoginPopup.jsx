import React from 'react'
import "./LoginPopup.css"
import { useState } from 'react'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const [currentState , setCurrentState] = useState("Signup");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=> setShowLogin(false) } src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
            {currentState=="Signup"?<input type="text" placeholder='Your Name' required />:<></>}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState==="Signup"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required></input>
            <p>I agree to the T&C</p>
        </div>
        {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Signup")}>Click here</span></p>: <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
       
      </form>
    </div>
  )
}

export default LoginPopup
