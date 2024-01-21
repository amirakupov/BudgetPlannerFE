import React, { useState } from 'react'
import {Link, Links} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{  background: '#92b359', fontFamily: 'Space Grotesk, sans-serif' }}>
            <div className="container">
                <Link to="/" className="navbar-brand font-weight-bold" style={{ color: '#000' }}>
                    Accountable
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a href="#what-we-believe" className="nav-link">What we believe</a></li>
                        <li className="nav-item"><a href='#features-tailored-for-you' className="nav-link">Features Tailored for You</a></li>
                        <li className="nav-item"><a href='#who-we-are' className="nav-link">Who we are</a></li>
                        <li className="nav-item"><a href='#about-us' className="nav-link">About us</a></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item" ><Link to="/register" className="nav-link" style={{ color: '#000' }}>Registration</Link></li>
                        <li className="nav-item" ><Link to="/login" className="nav-link" style={{ color: '#000' }}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar