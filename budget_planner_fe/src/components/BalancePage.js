import React, { useState, useEffect } from 'react';
import './BalancePage.css'; // Импорт файла стилей

const BalancePage = () => {
  const [balance, setBalance] = useState(null);

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

