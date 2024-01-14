import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';


const ChartsComponent = ({ incomeData, expenseData }) => {
    const [incomeChart, setIncomeChart] = useState(null);
    const [expenseChart, setExpenseChart] = useState(null);
    const incomeChartRef = useRef(null);
    const expenseChartRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const newIncomeChart = new Chart(incomeChartRef.current, {
            type: 'doughnut',
            data: {
                labels: incomeData.labels,
                datasets: [
                    {
                        data: incomeData.values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
            plugins: [
                {
                    beforeInit(chart, options) {
                        setIncomeChart(chart);
                    },
                },
            ],
        });

        const newExpenseChart = new Chart(expenseChartRef.current, {
            type: 'doughnut',
            data: {
                labels: expenseData.labels,
                datasets: [
                    {
                        data: expenseData.values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
            plugins: [
                {
                    beforeInit(chart, options) {
                        setExpenseChart(chart);
                    },
                },
            ],
        });

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: incomeData.labels,
                datasets: [
                    {
                        label: 'Incomes',
                        data: incomeData.values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Expenses',
                        data: expenseData.values,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
            newIncomeChart.destroy();
            newExpenseChart.destroy();
        };
    }, [incomeData, expenseData]);

    return (
        <div className="charts-container">
            <div className="mini-chart">
                <canvas ref={incomeChartRef} width="100" height="100"></canvas>
            </div>
            <div className="labels-container">
                {incomeChart &&
                    incomeData.labels.map((label, index) => (
                        <span key={index} style={{ color: incomeChart.data.datasets[0].backgroundColor[index] }}>
                            {label}
                        </span>
                    ))}
            </div>
            <div className="mini-chart">
                <canvas ref={expenseChartRef} width="100" height="100"></canvas>
            </div>
            <div className="labels-container">
                {expenseChart &&
                    expenseData.labels.map((label, index) => (
                        <span key={index} style={{ color: expenseChart.data.datasets[0].backgroundColor[index] }}>
                            {label}
                        </span>
                    ))}
            </div>
            <canvas ref={chartRef} id="chartCanvas" width="300" height="150"></canvas>
        </div>
    );
};

export default ChartsComponent;












