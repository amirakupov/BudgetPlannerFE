import React, { useState, useEffect, useContext } from 'react';
import './BalancePage.css'; // Импорт файла стилей
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

const BalancePage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
};

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/balance')
        .then(response => response.json())
        .then(data => {
          setBalance(data.balance);
        })
        .catch(error => {
          console.error('error while adding:', error);
        });
  }, []);

  return (
      <div className="balance-page-container">
        <Sidebar />
        <button onClick={handleLogout}>Logout</button>
        <h1>Balance Page</h1>
        {balance !== null ? (
            <p>Your Balance: {balance}</p>
        ) : (
            <p>Loading balance</p>
        )}
      </div>
  );
};

export default BalancePage;

