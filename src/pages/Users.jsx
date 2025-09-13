import React, { useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      role: 'Citizen',
      status: 'Active',
      reportsCount: 15,
      joinedDate: '2024-01-01',
      lastActive: '2024-01-15 10:30 AM',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      role: 'Admin',
      status: 'Active',
      reportsCount: 45,
      joinedDate: '2023-12-15',
      lastActive: '2024-01-15 09:15 AM',
      phone: '+1 (555) 987-6543'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      role: 'Citizen',
      status: 'Inactive',
      reportsCount: 8,
      joinedDate: '2024-01-10',
      lastActive: '2024-01-12 02:20 PM',
      phone: '+1 (555) 456-7890'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      role: 'Moderator',
      status: 'Active',
      reportsCount: 32,
      joinedDate: '2023-11-20',
      lastActive: '2024-01-15 11:45 AM',
      phone: '+1 (555) 321-9876'
    }
  ])

  const [filterRole, setFilterRole] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(user => {
    return (
      (filterRole === 'All' || user.role === filterRole) &&
      (filterStatus === 'All' || user.status === filterStatus) &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })

  const getRoleBadge = (role) => {
    const roleClasses = {
      'Admin': 'bg-danger text-white',
      'Moderator': 'bg-warning text-dark',
      'Citizen': 'bg-primary text-white'
    }
    return roleClasses[role] || 'bg-secondary text-white'
  }

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Active': 'bg-success text-white',
      'Inactive': 'bg-danger text-white',
      'Suspended': 'bg-warning text-dark'
    }
    return statusClasses[status] || 'bg-secondary text-white'
  }

  return (
    <div className="users-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">Users Management</h2>
        <button className="btn btn-primary">
          <i className="bi bi-person-plus me-2"></i>
          Add User
        </button>
      </div>

      {/* User Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-primary mb-2">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="text-primary">{users.length}</h3>
              <p className="text-muted mb-0">Total Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-success mb-2">
                <i className="bi bi-person-check"></i>
              </div>
              <h3 className="text-success">{users.filter(u => u.status === 'Active').length}</h3>
              <p className="text-muted mb-0">Active Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-danger mb-2">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3 className="text-danger">{users.filter(u => u.role === 'Admin').length}</h3>
              <p className="text-muted mb-0">Administrators</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <div className="display-6 text-warning mb-2">
                <i className="bi bi-file-text"></i>
              </div>
              <h3 className="text-warning">{users.reduce((sum, user) => sum + user.reportsCount, 0)}</h3>
              <p className="text-muted mb-0">Total Reports</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Search Users</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">Filter by Role</label>
              <select
                className="form-select"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="All">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
                <option value="Citizen">Citizen</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Filter by Status</label>
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Reports</th>
                  <th>Joined</th>
                  <th>Last Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <div className="avatar-initial rounded-circle bg-primary text-white">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <div className="fw-medium">{user.name}</div>
                          <small className="text-muted">{user.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${getRoleBadge(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${getStatusBadge(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <span className="fw-bold">{user.reportsCount}</span>
                    </td>
                    <td>
                      <small>{user.joinedDate}</small>
                    </td>
                    <td>
                      <small>{user.lastActive}</small>
                    </td>
                    <td>
                      <div className="btn-group" role="group">
                        <button className="btn btn-sm btn-outline-primary" title="View Profile">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-success" title="Edit User">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-warning" title="Send Message">
                          <i className="bi bi-envelope"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-danger" title="Delete User">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-people display-1 text-muted"></i>
              <h5 className="mt-3 text-muted">No users found</h5>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Users pagination" className="mt-4">
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

const avatarStyle = `
  .avatar-initial {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
  }
`

// Add styles
const styleSheet = document.createElement("style")
styleSheet.innerText = avatarStyle
document.head.appendChild(styleSheet)

export default Users