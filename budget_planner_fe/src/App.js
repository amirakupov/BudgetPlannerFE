import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import BalancePage from './components/BalancePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Создание ссылок для перехода на страницы */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/balance">Balance</Link>
            </li>
            <li>
              <Link to="/income">Incomes</Link>
            </li>
            <li>
              <Link to="/expense">Expenses</Link>
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



