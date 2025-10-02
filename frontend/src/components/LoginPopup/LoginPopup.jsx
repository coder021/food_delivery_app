import React, { useContext, useEffect } from 'react'
import "./LoginPopup.css"
import { useState } from 'react'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"


const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currentState , setCurrentState] = useState("Signup");

    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event)=>{
      const name = event.target.name 
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }


    const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url;
      if(currentState==="Login"){
        newUrl+="/api/user/login"
      }
      else{
        newUrl+="/api/user/register"
      }

      const response = await axios.post(newUrl,data);
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message);
      }
    }


  return (
    <div className='login-popup'>
      <form  onSubmit={onLogin}className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=> setShowLogin(false) } src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
            {currentState=="Signup"?<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />:<></>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currentState==="Signup"?"Create Account":"Login"}</button>
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
