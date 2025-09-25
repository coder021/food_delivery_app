import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo}/>
      <ul className='navbar-menu'>
          < Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href='#app-download'onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
          <a href='#Footer'onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon}/>
          <div className="dot">
          </div>
        </div>
        <button onClick={()=>{setShowLogin(true);}}>Sign In</button>
      </div>

    </div>
  )
} 

export default Navbar
