import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

import HomePage from './components/HomePage';
import BalancePage from './components/BalancePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

import StartingPage from './components/StartingPage';
import Register from './Register';

const App = () => {
  return (
      <Router>
        <div className="app-container">
          <Navbar bg="light" expand="lg" className="mb-4">
            <Container fluid>
              <Navbar.Brand as={Link} to="/" className="font-weight-bold">
                Budget Planner
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                  <Nav.Link as={Link} to="/" className="nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/balance" className="nav-link">
                    Balance
                  </Nav.Link>
                  <Nav.Link as={Link} to="/income" className="nav-link">
                    Incomes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/expense" className="nav-link">
                    Expenses
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes> 
            <Route path="/" element={<Register />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expense" element={<ExpensePage />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;

