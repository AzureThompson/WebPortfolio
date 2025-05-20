'use client'

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  plugins
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
//import { callback } from 'chart.js/dist/helpers/helpers.core';

Chart.register(ChartDataLabels, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

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

    // LINE GRAPH DATA
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

    // DOUGHNUT CHART DATA
    const labels = monthlyVisits.map((entry) => {
        const [year, month] = entry.month.split("-");
        return `${monthNames[parseInt(month) - 1]} ${year}`;
    });

    const dataValues = monthlyVisits.map((entry) => entry.count);

    const averageMonthly = Math.round(
        dataValues.reduce((sum, val) => sum + val, 0) / (dataValues.length || 1)
    );

    const doughnutData = {
        labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: [
                    "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#6366f1", "#ec4899",
                    "#22d3ee", "#a855f7", "#14b8a6", "#f97316", "#84cc16", "#eab308"
                ],
                borderWidth: 1
            }
        ]
    };

    const doughnutOptions = {
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            },
            Tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw} visits`
                }
            },
            datalabels: {
                display: false
            }
        },
        cutout: '70%'
    };

    return (
        <section className="analytics container">
            <h2>
                <small>
                    Visitor Analytics
                </small>
                Live Webpage Traffic
            </h2>
            <div className="viewport">
                <div className="visitor doughnut">
                    <Doughnut data={doughnutData} options={doughnutOptions} plugins={[ChartDataLabels]} />
                    <div className='doughnut-center'>
                        <div className="doughnut-average">
                            {averageMonthly} visits
                            <br/>Average
                        </div>
                    </div>
                </div>
                <div className="line graph">
                    <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
                </div>
            </div>
        </section>
    );
}
