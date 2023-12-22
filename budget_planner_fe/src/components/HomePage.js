import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Домашняя страница</h1>
      <p>Добро пожаловать на домашнюю страницу вашего бюджетного планировщика!</p>
      <Link to="/balance">Перейти к балансу</Link>
    </div>
  );
};

export default HomePage;
