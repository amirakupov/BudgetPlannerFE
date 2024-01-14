import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './IncomePage.css';
import ChartsComponent from "./ChartsComponent";

const IncomePage = () => {
  const [incomeData, setIncomeData] = useState({ amount: 0, name: '', isMonthly: false, comment: '' });

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
        <Form onSubmit={addIncome} className="income-form">
          <Form.Group controlId="incomeName">
            <Form.Label>Name of Income:</Form.Label>
            <Form.Control type="text" name="name" value={incomeData.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="incomeAmount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control type="number" name="amount" value={incomeData.amount} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="incomeComment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control type="text" name="comment" value={incomeData.comment} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="regularIncome">
            <Form.Check
                type="checkbox"
                label="Regular Income"
                checked={incomeData.isMonthly}
                onChange={() => setIncomeData({ ...incomeData, isMonthly: !incomeData.isMonthly })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Income
          </Button>
        </Form>
      </div>
  );
};


export default IncomePage;


