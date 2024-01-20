import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ExpensePage.css';
import Sidebar from './Sidebar';

const ExpensePage = () => {
  const [expenseData, setExpenseData] = useState({ amount: 0, name: '', description: '', isMonthly: false });
  const [expenseCategories, setExpenseCategories] = useState([]);

  useEffect(() => {
    // Fetch expense categories
    fetch('http://127.0.0.1:8000/expense-categories')
        .then(response => response.json())
        .then(data => setExpenseCategories(data));
  }, []);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const addExpense = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/expenses', {
        method: 'POST',
        credentials: 'include',
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
        <Sidebar />
        <h2>Add Expense</h2>
        <Form onSubmit={addExpense} className="expense-form">
          <Form.Group controlId="expenseName">
            <Form.Label>Name of Expense:</Form.Label>
            <Form.Control type="text" name="name" value={expenseData.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="expenseAmount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control type="number" name="amount" value={expenseData.amount} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="expenseDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" name="desciption" value={expenseData.description} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="expenseCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Select name="category" value={expenseData.category} onChange={handleInputChange}>
              <option value="Food">Food</option>
              <option value="Bills">Bills</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Groceries">Groceries</option>
              <option value="Medicine">Medicine</option>
              <option value="Investments">Investments</option>
              <option value="Clothing">Clothing</option>
              <option value="Rent">Rent</option>
              <option value="Insurance">Insurance</option>
              <option value="Car">Car</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="regularExpense">
            <Form.Check
                type="checkbox"
                label="Regular Expense"
                checked={expenseData.isMonthly}
                onChange={() => setExpenseData({ ...expenseData, isMonthly: !expenseData.isMonthly })}
            />
          </Form.Group>
          <Form.Group controlId="expenseCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Control
                as="select"
                name="category"
                value={expenseData.category}
                onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              {expenseCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
  );
};

export default ExpensePage;

