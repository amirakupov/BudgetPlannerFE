import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

import Sidebar from "./components/Sidebar";
import HomePage from './components/HomePage';
import BalancePage from './components/BalancePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
        setIsOpen(!isOpen);
  };
  return (
      <Router>
        <div className="app-container">
          <Sidebar />
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

