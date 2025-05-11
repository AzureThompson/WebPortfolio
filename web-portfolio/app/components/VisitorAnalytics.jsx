'use client'

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function VisitorAnalytics(){
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const [totalVisits, setTotalVisits] = useState(0);
    const [monthlyVisits, setMonthlyVisits] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch("/api/stats");
                const data = await response.json();
                setTotalVisits(data.totalVisits);
                setMonthlyVisits(data.monthlyVisits);
            }catch (err) {
                console.error("Failed to fetch visitor stats:", err);
            }
        };

        fetchStats();
    }, []);

    const chartData = {
        labels: monthlyVisits.map((entry) => {
            const [year, month] = entry.month.split("-");
            return `${monthNames[parseInt(month) - 1]} ${year}`;
        }),
        datasets: [
            {
                label: 'Monthly Visits',
                data: monthlyVisits.map((entry) => entry.count),
                fill: false,
                borderColor: "#8f8f8f",
                backgroundColor: "#8f8f8f",
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: '#333',
                font: {
                    weight: 'bold'
                },
                formatter: (value) => value,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Month",
                }
            },
            y: {
                beginAtZero: true,
                max: Math.max(...monthlyVisits.map((entry) => entry.count)) + 10,
                title: {
                    display: true,
                    text: "Views",
                },
            },
        },
    };

    return (
        <section className="analytics container">
            <h2>
                <small>
                    Live traffic overview
                </small>
                Visitor Analytics
            </h2>
            <div className="viewport">
                <div className="visitor counter">
                    <p>Total Visits: {totalVisits}</p>
                </div>
                <div className="line graph">
                    <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
                </div>
            </div>
        </section>
    );
}
