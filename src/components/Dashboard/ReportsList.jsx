import React, { useState } from 'react'
import './ReportsList.css'

const ReportsList = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const reports = [
    {
      id: 1,
      title: 'Pothole on Oak St',
      department: 'Public Works',
      status: 'pending',
      priority: 'high',
      time: '2 mins ago'
    },
    {
      id: 2,
      title: 'Overflowing Bins - In Progress',
      department: 'Waste Mgmt',
      status: 'in-progress',
      priority: 'medium',
      time: '15 mins ago'
    },
    {
      id: 3,
      title: 'Streetlighting Bins - Processing',
      department: 'Electric Dept',
      status: 'processing',
      priority: 'low',
      time: '1 hour ago'
    },
    {
      id: 4,
      title: 'Broken sidewalk - Pending',
      department: 'Public Works',
      status: 'resolved',
      priority: 'medium',
      time: '2 hours ago'
    },
    {
      id: 5,
      title: 'Weekly Submission Trends',
      department: 'Analytics',
      status: 'pending',
      priority: 'low',
      time: '3 hours ago'
    }
  ]

  const getStatusBadge = (status) => {
    const statusClasses = {
      'pending': 'bg-warning',
      'in-progress': 'bg-info',
      'processing': 'bg-primary',
      'resolved': 'bg-success'
    }
    return statusClasses[status] || 'bg-secondary'
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <i className="bi bi-exclamation-triangle text-danger"></i>
      case 'medium':
        return <i className="bi bi-dash-circle text-warning"></i>
      case 'low':
        return <i className="bi bi-check-circle text-success"></i>
      default:
        return <i className="bi bi-circle text-muted"></i>
    }
  }

  return (
    <div className="reports-list-container">
      <div className="card reports-card shadow-sm">
        <div className="card-header bg-white border-0">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="reports-title mb-0">Reports List</h5>
          </div>
          
          <div className="reports-filters">
            <div className="row g-2">
              <div className="col-6">
                <select className="form-select form-select-sm">
                  <option>Filter</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
              <div className="col-6">
                <select className="form-select form-select-sm">
                  <option>Status</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-body p-0">
          <div className="reports-header">
            <div className="row g-2 px-3 py-2">
              <div className="col-4">
                <small className="text-muted fw-bold">Category</small>
              </div>
              <div className="col-4">
                <small className="text-muted fw-bold">Status</small>
              </div>
              <div className="col-4">
                <small className="text-muted fw-bold">Department</small>
              </div>
            </div>
          </div>
          
          <div className="reports-list">
            {reports.map((report) => (
              <div key={report.id} className="report-item">
                <div className="report-content">
                  <div className="report-main">
                    <div className="report-priority">
                      {getPriorityIcon(report.priority)}
                    </div>
                    <div className="report-details">
                      <h6 className="report-title">{report.title}</h6>
                      <small className="report-time text-muted">{report.time}</small>
                    </div>
                  </div>
                  
                  <div className="report-meta">
                    <span className={`badge ${getStatusBadge(report.status)} status-badge`}>
                      {report.status.replace('-', ' ')}
                    </span>
                    <div className="report-actions">
                      <button className="btn btn-link btn-sm p-0">
                        <i className="bi bi-three-dots"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="report-department">
                  <small className="text-muted">{report.department}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsList