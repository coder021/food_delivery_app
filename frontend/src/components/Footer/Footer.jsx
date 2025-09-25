import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>

        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
                <p>ORDER THE BEST FOODS FROM OUR SITE</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon}alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-centre">
                <h2>COMPANY </h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>prawnfoods@gmail.com</li>
                </ul>
            </div>
            
        </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2025 Prawn Foods - All rights Reserved
      </p>
    </div>
  )
}

export default Footer
