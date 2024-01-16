import React, {useEffect, useState, useContext} from 'react';
import ChartsComponent from './ChartsComponent';
import './HomePage.css'
import './BalancePage.css';
import './Sidebar'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

const HomePage = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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

    const incomeData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        values: [1000, 1500, 1200, 2000, 1800],
    };

    const expenseData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        values: [500, 700, 600, 900, 800],
    };

    return (
        <div>
            <div className="home-page-container">
                <Sidebar/>
                <button onClick={handleLogout}>Logout</button>
                <h1>Home Page</h1>
                <p>Welcome</p>
                {balance !== null ? (
                    <p>Your Balance: {balance}</p>
                ) : (
                    <p>Loading balance</p>
                )}
                <a href="/income" className="balance-link income-button">
                    Add Income
                </a>
                <a href="/expense" className="balance-link expense-button">
                    Add Expense
                </a>
                {incomeData && expenseData && (
                    <ChartsComponent incomeData={incomeData} expenseData={expenseData} />
                )}
            </div>
        </div>
    );
};

export default HomePage;

