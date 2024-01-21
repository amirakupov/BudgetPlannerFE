import React, { useState } from 'react'
import {Link, Links} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
      <nav className="header">
          <div className="text-wrapper">Accountable</div>
          <a href="#what-we-believe" className="div">What we believe </a>
          <a href='#features-tailored-for-you' className="div">Features Tailored for You</a>
          <a href='#who-we-are' className="div">Who we are</a>
          <a href='#about-us' className="div">About us</a>
          <div className="buttons-container">
              <Link to="/register" className="button">Registration</Link>
              <Link to="/login" className="button">Login</Link>
          </div>
      </nav>
  )
}


export default Navbar