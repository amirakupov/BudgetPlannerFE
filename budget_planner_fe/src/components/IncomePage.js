import React, { useState } from 'react';
import './IncomePage.css';
const IncomePage = () => {
  const [incomeData, setIncomeData] = useState({ amount: 0, name: '', isMonthly: false, comment: ''});
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [balance, setBalance] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIncomeData({ ...incomeData, [name]: value });
  };

  const addIncome = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('http://127.0.0.1:8000/incomes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incomeData),
      });
      
    } catch (error) {
      console.error('error while adding:', error);
    }
  };

  return (
    <div className="income-page-container">
      <h2>Income Page</h2>
      <form onSubmit={addIncome} className="income-form">
        <label>
          Name of Income:
          <input type="text" name="name" value={incomeData.name} onChange={handleInputChange} />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={incomeData.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Regular Income:
          <input
            type="checkbox"
            name="isMonthly"
            checked={incomeData.isMonthly}
            onChange={() =>
              setIncomeData({ ...incomeData, isMonthly: !incomeData.isMonthly })
            }
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={incomeData.comment}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add income</button>
      </form>
    </div>
  );
};

export default IncomePage;
