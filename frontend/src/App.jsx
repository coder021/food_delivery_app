import React, { useState } from 'react'
import Navbar from './components/Navigation/Navbar.jsx'
import '../src/index.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import PlaceOrder  from './pages/PlaceOrder/PlaceOrder.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/Verify/verify.jsx'

const App = () => {

  const [showLogin , setShowLogin] = useState(false);

  return (
    <StoreContextProvider>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </div>
    <Footer />
    </StoreContextProvider>
    
  )
}

export default App
