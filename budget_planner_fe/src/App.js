import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import BalancePage from './components/BalancePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

const App = () => {
  return (
      <Router>
        <div className="app-container">
          <nav className="nav-bar">
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/balance" className="nav-link">Balance</Link>
              </li>
              <li>
                <Link to="/income" className="nav-link">Incomes</Link>
              </li>
              <li>
                <Link to="/expense" className="nav-link">Expenses</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expense" element={<ExpensePage />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;



