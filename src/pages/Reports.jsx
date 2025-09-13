import React, { useState } from 'react'

const Reports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic issues',
      category: 'Roads',
      status: 'Pending',
      priority: 'High',
      location: 'Main St & 5th Ave',
      reportedBy: 'John Doe',
      reportedAt: '2024-01-15 10:30 AM',
      assignedTo: 'Public Works',
      image: null
    },
    {
      id: 2,
      title: 'Broken Street Light',
      description: 'Street light not working, safety concern',
      category: 'Lighting',
      status: 'In Progress',
      priority: 'Medium',
      location: 'Oak St & 2nd Ave',
      reportedBy: 'Jane Smith',
      reportedAt: '2024-01-15 09:15 AM',
      assignedTo: 'Electrical Dept',
      image: null
    },
    {
      id: 3,
      title: 'Overflowing Trash Bins',
      description: 'Multiple bins overflowing in the area',
      category: 'Sanitation',
      status: 'Resolved',
      priority: 'Low',
      location: 'Park Avenue',
      reportedBy: 'Mike Johnson',
      reportedAt: '2024-01-14 02:20 PM',
      assignedTo: 'Sanitation Dept',
      image: null
    }
  ])

  const [filterStatus, setFilterStatus] = useState('All')
  const [filterCategory, setFilterCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReports = reports.filter(report => {
    return (
      (filterStatus === 'All' || report.status === filterStatus) &&
      (filterCategory === 'All' || report.category === filterCategory) &&
      (report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       report.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Pending': 'bg-warning text-dark',
      'In Progress': 'bg-info text-white',
      'Resolved': 'bg-success text-white',
      'Cancelled': 'bg-danger text-white'
    }
    return statusClasses[status] || 'bg-secondary text-white'
  }

  const getPriorityBadge = (priority) => {
    const priorityClasses = {
      'High': 'bg-danger text-white',
      'Medium': 'bg-warning text-dark',
      'Low': 'bg-success text-white'
    }
    return priorityClasses[priority] || 'bg-secondary text-white'
  }

  return (
    <div className="reports-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">Reports Management</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          New Report
        </button>
      </div>

      {/* Filters */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Search Reports</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title, description, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">Filter by Status</label>
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Filter by Category</label>
              <select
                className="form-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Roads">Roads</option>
                <option value="Lighting">Lighting</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Water">Water</option>
                <option value="Parks">Parks</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Location</th>
                  <th>Reported By</th>
                  <th>Date</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <span className="fw-bold text-primary">#{report.id}</span>
                    </td>
                    <td>
                      <div>
                        <div className="fw-medium">{report.title}</div>
                        <small className="text-muted">{report.description}</small>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light text-dark border">
                        {report.category}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${getStatusBadge(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${getPriorityBadge(report.priority)}`}>
                        {report.priority}
                      </span>
                    </td>
                    <td>
                      <i className="bi bi-geo-alt text-muted me-1"></i>
                      {report.location}
                    </td>
                    <td>{report.reportedBy}</td>
                    <td>
                      <small>{report.reportedAt}</small>
                    </td>
                    <td>
                      <span className="badge bg-info text-white">
                        {report.assignedTo}
                      </span>
                    </td>
                    <td>
                      <div className="btn-group" role="group">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-success">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-1 text-muted"></i>
              <h5 className="mt-3 text-muted">No reports found</h5>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Reports pagination" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Reports