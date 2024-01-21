import React, {useEffect, useState, useContext} from 'react';
import ChartsComponent from './ChartsComponent';
import './HomePage.css'
import './BalancePage.css';
import './Sidebar'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import Footer from "./Footer";
import Loader from "./Loader";

const HomePage = () => {
    // const { logout } = useContext(AuthContext);
    // const navigate = useNavigate();
    const [incomeData, setIncomeData] = useState(null);
    const [expenseData, setExpenseData] = useState(null);
    const [financialRecords, setFinancialRecords] = useState([]);// for incomes
    const [expenseRecords, setExpenseRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    // const handleLogout = () => {
    //     logout();
    //     navigate("/");
    // };

    const [balance, setBalance] = useState(null);

    useEffect(() => {


        const simulateLoading = async () => {

            await new Promise((resolve) => setTimeout(resolve, 2500));
            setLoading(false);
        };

        simulateLoading();
        fetch('http://127.0.0.1:8000/balance', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setBalance(data.balance);
            })
            .catch(error => {
                console.error('error while adding:', error);
            });

        fetch('http://127.0.0.1:8000/income-categories-with-amounts', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                // Assuming the data format is an array of tuples [category, amount]
                const labels = data.map(item => item[0]);
                const values = data.map(item => item[1]);

                setIncomeData({ labels, values });
            })
            .catch(error => {
                console.error('error while fetching income categories with amounts:', error);
            });
        fetch('http://127.0.0.1:8000/incomes?limit=5', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setFinancialRecords(data);
            })
            .catch(error => {
                console.error('error while fetching financial records:', error);
            });

        fetch('http://127.0.0.1:8000/expense-categories-with-amounts', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                const labels = data.map(item => item[0]);
                const values = data.map(item => item[1]);

                setExpenseData({ labels, values });
            })
            .catch(error => {
                console.error('error while fetching expense categories with amounts:', error);
            });
        fetch('http://127.0.0.1:8000/expenses?limit=5', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setExpenseRecords(data);
            })
            .catch(error => {
                console.error('error while fetching expense records:', error);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="home-page-container" style={{fontFamily: 'Space Grotesk, sans-serif'}}>

                    <Sidebar/>
                    <h1>Welcome back</h1>
                    <p></p>
                    {balance !== null ? (
                        <p>Your Balance: {balance}€</p>
                    ) : (
                        <p>Loading balance</p>
                    )}
                    <a href="/income" className="balance-link income-button rounded-pill mr-2 mb-3">
                        Add Income
                    </a>
                    <a href="/expense" className="balance-link expense-button rounded-pill mb-3">
                        Add Expense
                    </a>
                    {incomeData && expenseData && (
                        <ChartsComponent incomeData={incomeData} expenseData={expenseData} />
                    )}
                    <h2>Financial Records</h2>
                    <h4>Incomes</h4>
                    <div className="table-container">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Frequency</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {financialRecords.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.category}</td>
                                        <td>{record.name}</td>
                                        <td>{record.amount}€</td>
                                        <td>{record.isMonthly ? 'Monthly' : 'One-time'}</td>
                                        <td>{record.date}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h4>Expense Records</h4>
                    <div className="table-container">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Frequency</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {expenseRecords.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.category}</td>
                                        <td>{record.name}</td>
                                        <td>{record.amount}€</td>
                                        <td>{record.isMonthly ? 'Monthly' : 'One-time'}</td>
                                        <td>{record.date}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )}
            <Footer />
        </div>
    );
};

export default HomePage;

