import React, { useState } from 'react';
import './ExpensePage.css';
const ExpensePage = () => {
  const [expenseData, setExpenseData] = useState({ amount: 0, name: '', comment: '', isMonthly: false });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const addExpense = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });

    } catch (error) {
      console.error('error while adding:', error);
    }
  };

  return (
    <div className="expense-page-container">
      <h2>Expense Page</h2>
      <form onSubmit={addExpense} onSubmit={addExpense} className="expense-form">
        <label>
          Name of Expense:
          <input type="text" name="name" value={expenseData.name} onChange={handleInputChange} />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={expenseData.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={expenseData.comment}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Regular Expense:
          <input
            type="checkbox"
            name="isMonthly"
            checked={expenseData.isMonthly}
            onChange={() =>
              setExpenseData({ ...expenseData, isMonthly: !expenseData.isMonthly })
            }
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpensePage;
