import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; //
const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Home Page</h1>
      <p>Welcome</p>
      <Link to="/balance" className="balance-link">Go to balance</Link>
    </div>
  );
};

export default HomePage;
