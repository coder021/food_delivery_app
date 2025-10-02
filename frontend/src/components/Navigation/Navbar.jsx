import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {getTotal,token,setToken} = useContext(StoreContext);

  const [open,setOpen] = useState(false);

  const navigate = useNavigate();

  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className='navbar'>
      <Link to='/'> <img className='logo' src={assets.logo}/> </Link>
      <ul className='navbar-menu'>
          < Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href='#app-download'onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?"active":""}>Mobile App</a>
          <a href='#Footer'onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon}/></Link>
          <div className={getTotal()===0?"":"dot"}>
          </div>
        </div>
        {!token?<button onClick={()=>{setShowLogin(true);}}>Sign In</button>:
        <div className='navbar-profile' onClick={()=>setOpen(!open)}> 
          <img src={assets.profile_icon} />
          { open && (
              <ul className="navbar-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          )

          }
          
        </div>
        }
        
      </div>

    </div>
  )
} 

export default Navbar
