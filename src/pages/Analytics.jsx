import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const Analytics = () => {
  // Monthly Reports Data
  const monthlyReportsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Reports',
        data: [120, 150, 180, 200, 160, 190, 220, 250, 180, 200, 240, 280],
        backgroundColor: 'rgba(44, 90, 160, 0.8)',
        borderColor: '#2c5aa0',
        borderWidth: 2,
        borderRadius: 4,
      }
    ]
  }

  // Resolution Time Trend
  const resolutionTrendData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Average Resolution Time (days)',
        data: [5.2, 4.8, 4.1, 3.9, 4.2, 3.5],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#28a745',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      }
    ]
  }

  // Category Distribution
  const categoryDistributionData = {
    labels: ['Roads', 'Lighting', 'Sanitation', 'Water', 'Parks', 'Traffic'],
    datasets: [
      {
        data: [30, 20, 25, 15, 8, 12],
        backgroundColor: [
          '#2c5aa0',
          '#17a2b8',
          '#28a745',
          '#ffc107',
          '#fd7e14',
          '#6f42c1'
        ],
        borderWidth: 0,
      }
    ]
  }

  // Status Distribution
  const statusDistributionData = {
    labels: ['Resolved', 'In Progress', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [65, 20, 12, 3],
        backgroundColor: [
          '#28a745',
          '#17a2b8',
          '#ffc107',
          '#dc3545'
        ],
        borderWidth: 0,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
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
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6c757d',
        },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
  }

  return (
    <div className="analytics-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">Analytics & Reports</h2>
        <div className="btn-group">
          <button className="btn btn-outline-primary">Export PDF</button>
          <button className="btn btn-primary">Generate Report</button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-primary mb-2">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h3 className="text-primary">2,547</h3>
              <p className="text-muted mb-1">Total Reports</p>
              <small className="badge bg-success">+12% from last month</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-success mb-2">
                <i className="bi bi-check-circle"></i>
              </div>
              <h3 className="text-success">75.5%</h3>
              <p className="text-muted mb-1">Resolution Rate</p>
              <small className="badge bg-success">+5% from last month</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-warning mb-2">
                <i className="bi bi-clock"></i>
              </div>
              <h3 className="text-warning">3.5</h3>
              <p className="text-muted mb-1">Avg Days to Resolve</p>
              <small className="badge bg-success">-1.2 days improved</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-info mb-2">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="text-info">89.2%</h3>
              <p className="text-muted mb-1">User Satisfaction</p>
              <small className="badge bg-success">+2% from last month</small>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="row g-4">
        {/* Monthly Reports Trend */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Monthly Reports Trend</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Bar data={monthlyReportsData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Reports by Category</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Doughnut data={categoryDistributionData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Resolution Time Trend */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Average Resolution Time Trend</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Line data={resolutionTrendData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Status Distribution</h5>
            </div>
            <div className="card-body">
              <div style={{ height: '300px' }}>
                <Doughnut data={statusDistributionData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Department Performance */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Department Performance</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Total Reports</th>
                      <th>Resolved</th>
                      <th>In Progress</th>
                      <th>Avg Resolution Time</th>
                      <th>Performance Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Public Works</strong>
                        <small className="d-block text-muted">Roads & Infrastructure</small>
                      </td>
                      <td>456</td>
                      <td>
                        <span className="badge bg-success">342</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">114</span>
                      </td>
                      <td>3.2 days</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress me-2" style={{width: '100px', height: '8px'}}>
                            <div className="progress-bar bg-success" style={{width: '85%'}}></div>
                          </div>
                          <small>85%</small>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Sanitation Dept</strong>
                        <small className="d-block text-muted">Waste Management</small>
                      </td>
                      <td>312</td>
                      <td>
                        <span className="badge bg-success">248</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">64</span>
                      </td>
                      <td>2.8 days</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress me-2" style={{width: '100px', height: '8px'}}>
                            <div className="progress-bar bg-success" style={{width: '92%'}}></div>
                          </div>
                          <small>92%</small>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Electrical Dept</strong>
                        <small className="d-block text-muted">Street Lighting</small>
                      </td>
                      <td>198</td>
                      <td>
                        <span className="badge bg-success">156</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">42</span>
                      </td>
                      <td>4.1 days</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress me-2" style={{width: '100px', height: '8px'}}>
                            <div className="progress-bar bg-warning" style={{width: '78%'}}></div>
                          </div>
                          <small>78%</small>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Water Department</strong>
                        <small className="d-block text-muted">Water & Drainage</small>
                      </td>
                      <td>124</td>
                      <td>
                        <span className="badge bg-success">98</span>
                      </td>
                      <td>
                        <span className="badge bg-warning">26</span>
                      </td>
                      <td>3.7 days</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="progress me-2" style={{width: '100px', height: '8px'}}>
                            <div className="progress-bar bg-success" style={{width: '88%'}}></div>
                          </div>
                          <small>88%</small>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics