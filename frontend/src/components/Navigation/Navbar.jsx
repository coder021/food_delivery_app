import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo}/>
      <ul className='navbar-menu'>
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</li>
          <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon}/>
          <div className="dot">
          </div>
        </div>
        <button>Sign In</button>
      </div>

    </div>
  )
} 

export default Navbar
