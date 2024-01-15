import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import { useContext } from 'react';
import AuthContext from './context/AuthProvider';
import './App.css';

import Sidebar from "./components/Sidebar";
import HomePage from './components/HomePage';
import BalancePage from './components/BalancePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

import StartingPage from './ComponentsStartingPage/StartingPage';
import Register from './Login/Register';
import Login from './Login/Login';

const App = () => {
  const { auth } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
        setIsOpen(!isOpen);
  };

  return (
      <Router>
        <div className="app-container">
          <Navigation/>
          <Sidebar />
          <Routes> 
            <Route path="/" element={<StartingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {auth.user && (
            <>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expense" element={<ExpensePage />} />
            </>
            )}
          </Routes>
        </div>
      </Router>
  );
};

export default App;

