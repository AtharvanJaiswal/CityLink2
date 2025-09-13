import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import './Analytics.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Analytics = () => {
  const barChartData = {
    labels: ['1st Wk', '2nd Wk', '3rd Wk', '4th Wk'],
    datasets: [
      {
        label: 'Reports',
        data: [118, 160, 135, 150],
        backgroundColor: ['#2c5aa0', '#3498db', '#5dade2', '#85c1e9'],
        borderColor: '#2c5aa0',
        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  }

  const lineChartData = {
    labels: ['1st Wk', '2nd Wk', '3rd Wk', '4th Wk'],
    datasets: [
      {
        label: 'Resolved',
        data: [20, 35, 25, 40],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#28a745',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: 'Pending',
        data: [30, 25, 35, 30],
        borderColor: '#ffc107',
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#ffc107',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#e9ecef',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f8f9fa',
        },
        ticks: {
          color: '#6c757d',
          font: {
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6c757d',
          font: {
            size: 11,
          },
        },
      },
    },
  }

  return (
    <div className="analytics-section">
      <h5 className="analytics-title">Analytics & Trends</h5>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card analytics-card shadow-sm">
            <div className="card-body">
              <h6 className="chart-title">Reports by Category</h6>
              <div className="chart-container">
                <Bar data={barChartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card analytics-card shadow-sm">
            <div className="card-body">
              <h6 className="chart-title">Reports by Category</h6>
              <div className="chart-container">
                <Line data={lineChartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics