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
import { POST } from '../api/track/route';
import { useState, useEffect } from "react";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function VisitorAnalytics(){
    const [totalVisits, setTotalVisits] = useState(0);
    const [monthlyVisits, setMonthlyVisits] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            const res = await fetch('/api/stats', {method: 'POST'});
        };
    
        fetchStats();
    }, []);

    const chartData = {
        labels: monthlyVisits.map((entry) => entry.month),
        datasets: [
            {
                label: 'Monthly Visits',
                data: monthlyVisits.map((entry) => entry.count),
                fill: false,
                backgroundColor: '#8f8f8f',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <section className="visitor container">
            <h2>
                <small>
                    Charts and Data
                </small>
                Visitor Analytics
            </h2>
            <div className="viewport">
                <div className="visitor-counter">
                    <p>Total Visits: {totalVisits}</p>
                </div>
                <div className="line-graph">
                    <Line data={chartData} />
                </div>
            </div>
        </section>
    );
}
