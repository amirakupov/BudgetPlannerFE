import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './IncomePage.css';
import ChartsComponent from "./ChartsComponent";
import Sidebar from './Sidebar';

const IncomePage = () => {
  const [incomeData, setIncomeData] = useState({ amount: 0, name: '', isMonthly: false, category: 'Salary', description: '' });
  const [incomeCategories, setIncomeCategories] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/income-categories')
        .then(response => response.json())
        .then(data => setIncomeCategories(data));
  }, []);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIncomeData({ ...incomeData, [name]: value });
  };

  const addIncome = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/incomes', {
        method: 'POST',
        credentials: 'include',
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
        <Sidebar />
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
          <Form.Group controlId="incomeDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" name="description" value={incomeData.description} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="incomeCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Select name="category" value={incomeData.category} onChange={handleInputChange}>
              <option value="Salary">Salary</option>
              <option value="Investment Dividends">Investment Dividends</option>
              <option value="Capital Gain">Capital Gain</option>
              <option value="Additional Income">Additional Income</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="regularIncome">
            <Form.Check
                type="checkbox"
                label="Regular Income"
                checked={incomeData.isMonthly}
                onChange={() => setIncomeData({ ...incomeData, isMonthly: !incomeData.isMonthly })}
            />
          </Form.Group>
          <Form.Group controlId="incomeCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Control
                as="select"
                name="category"
                value={incomeData.category}
                onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              {incomeCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Income
          </Button>
        </Form>
      </div>
  );
};


export default IncomePage;


