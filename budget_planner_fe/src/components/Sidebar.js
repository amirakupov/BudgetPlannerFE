import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faBalanceScale,
    faMoneyCheckAlt,
    faMoneyBill,
    faChartPie,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../context/AuthProvider";

const Sidebar = () => {
    const [userInfo, setUserInfo] = useState(null);
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        // Fetch user details from the backend
        fetch('http://127.0.0.1:8000/current_user', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setUserInfo(data);
            })
            .catch(error => {
                console.error('error while fetching user details:', error);
            });
    }, []);
    const handleLogout = () => {
        logout();
    };
    return (
        <div id="nav-bar">
            <input type="checkbox" id="nav-toggle" />
            <div id="nav-header">
                <span id="nav-title">Accountable</span>
                <hr />
                <label htmlFor="nav-toggle">
                    <span id="nav-toggle-burger"></span>
                </label>
            </div>
            <div id="nav-content">
                <Link to="/homepage" className="nav-button">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </Link>
                <Link to="/income" className="nav-button">
                    <FontAwesomeIcon icon={faMoneyCheckAlt} />
                    <span>Incomes</span>
                </Link>
                <Link to="/expense" className="nav-button">
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <span>Expenses</span>
                </Link>
                <Link to="/balance" className="nav-button">
                    <FontAwesomeIcon icon={faBalanceScale} />
                    <span>Balance</span>
                </Link>
                <Link to="/logout" className="nav-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Logout</span>
                </Link>
                <div id="nav-content-highlight"></div>
            </div>
            <input type="checkbox" id="nav-footer-toggle" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar">
                        <img src="https://static.vecteezy.com/system/resources/previews/022/014/159/original/avatar-icon-profile-icon-member-login-isolated-vector.jpg" alt="Avatar" />
                    </div>
                    <div id="nav-footer-titlebox">
                        {userInfo ? (
                            <>
                                <a id="nav-footer-title">{userInfo.username}</a>
                                {userInfo.email && <span id="nav-footer-subtitle">{userInfo.email}</span>}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <label htmlFor="nav-footer-toggle">
                        <FontAwesomeIcon icon="caret-up" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


