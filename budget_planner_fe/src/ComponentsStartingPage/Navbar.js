import React, { useState } from 'react'
import {Link, Links} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="header">
      <div className="text-wrapper">BudgetPlanner</div>
      <nav className="div">iwas wegen Budgetplanner</nav>
      <nav className="div">iwas budgetplanner2</nav>
      <nav className="div">Who we are</nav>
      <nav className="div">About us</nav>
      <div className="buttons-container">
        <Link to="/register" className="button">Registration</Link>
        <Link to="/login" className="button">Login</Link>      
      </div>
    </nav>
  )
}

export default Navbar