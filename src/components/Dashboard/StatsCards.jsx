import React from 'react'
import './StatsCards.css'

const StatsCards = () => {
  const statsData = [
    {
      title: 'Total Reports',
      value: '2,547',
      change: '+12%',
      icon: 'bi-file-text',
      color: 'primary'
    },
    {
      title: 'Resolved Issues',
      value: '1,923',
      change: '+8%',
      icon: 'bi-check-circle',
      color: 'success'
    },
    {
      title: 'Avg. Resolution Time',
      value: '4.2 days',
      change: '-15%',
      icon: 'bi-clock',
      color: 'warning'
    },
    {
      title: 'Active Users',
      value: '12,845',
      change: '+23%',
      icon: 'bi-people',
      color: 'info'
    }
  ]

  return (
    <div className="stats-cards">
      <div className="row g-3">
        {statsData.map((stat, index) => (
          <div key={index} className="col-sm-6 col-lg-3">
            <div className={`card stats-card stats-card-${stat.color} shadow-sm`}>
              <div className="card-body">
                <div className="stats-card-content">
                  <div className="stats-info">
                    <h6 className="stats-title">{stat.title}</h6>
                    <h3 className="stats-value">{stat.value}</h3>
                    <div className="stats-change">
                      <span className={`badge ${stat.change.startsWith('+') ? 'bg-success' : 'bg-danger'}`}>
                        {stat.change}
                      </span>
                      <small className="text-muted ms-1">from last month</small>
                    </div>
                  </div>
                  <div className="stats-icon">
                    <i className={`${stat.icon} icon-${stat.color}`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsCards