import React, { useState } from 'react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    siteName: 'CityLink',
    adminEmail: 'admin@citylink.gov',
    maxFileSize: '10',
    allowedFileTypes: 'jpg,jpeg,png,pdf',
    autoAssignment: true,
    emailNotifications: true,
    smsNotifications: false,
    maintenanceMode: false,
    timezone: 'UTC',
    language: 'en',
    reportsPerPage: '20',
    sessionTimeout: '30'
  })

  const [departments, setDepartments] = useState([
    { id: 1, name: 'Public Works', email: 'public.works@citylink.gov', active: true },
    { id: 2, name: 'Sanitation Dept', email: 'sanitation@citylink.gov', active: true },
    { id: 3, name: 'Electrical Dept', email: 'electrical@citylink.gov', active: true },
    { id: 4, name: 'Water Department', email: 'water@citylink.gov', active: false }
  ])

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSaveSettings = () => {
    // Save settings logic here
    alert('Settings saved successfully!')
  }

  return (
    <div className="settings-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">System Settings</h2>
        <button className="btn btn-primary" onClick={handleSaveSettings}>
          <i className="bi bi-save me-2"></i>
          Save Changes
        </button>
      </div>

      {/* Settings Navigation */}
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  <i className="bi bi-gear me-2"></i>
                  General Settings
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'departments' ? 'active' : ''}`}
                  onClick={() => setActiveTab('departments')}
                >
                  <i className="bi bi-building me-2"></i>
                  Departments
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <i className="bi bi-bell me-2"></i>
                  Notifications
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveTab('security')}
                >
                  <i className="bi bi-shield-check me-2"></i>
                  Security
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'system' ? 'active' : ''}`}
                  onClick={() => setActiveTab('system')}
                >
                  <i className="bi bi-cpu me-2"></i>
                  System
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">General Settings</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Site Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={settings.siteName}
                      onChange={(e) => handleSettingChange('siteName', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Admin Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={settings.adminEmail}
                      onChange={(e) => handleSettingChange('adminEmail', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Timezone</label>
                    <select
                      className="form-select"
                      value={settings.timezone}
                      onChange={(e) => handleSettingChange('timezone', e.target.value)}
                    >
                      <option value="UTC">UTC</option>
                      <option value="EST">Eastern Time</option>
                      <option value="PST">Pacific Time</option>
                      <option value="CST">Central Time</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Default Language</label>
                    <select
                      className="form-select"
                      value={settings.language}
                      onChange={(e) => handleSettingChange('language', e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Max File Size (MB)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={settings.maxFileSize}
                      onChange={(e) => handleSettingChange('maxFileSize', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Allowed File Types</label>
                    <input
                      type="text"
                      className="form-control"
                      value={settings.allowedFileTypes}
                      onChange={(e) => handleSettingChange('allowedFileTypes', e.target.value)}
                      placeholder="jpg,jpeg,png,pdf"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoAssignment"
                        checked={settings.autoAssignment}
                        onChange={(e) => handleSettingChange('autoAssignment', e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="autoAssignment">
                        Enable automatic report assignment to departments
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Departments Settings */}
          {activeTab === 'departments' && (
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Department Management</h5>
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-plus-lg me-1"></i>
                  Add Department
                </button>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Department Name</th>
                        <th>Contact Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((dept) => (
                        <tr key={dept.id}>
                          <td>
                            <strong>{dept.name}</strong>
                          </td>
                          <td>{dept.email}</td>
                          <td>
                            <span className={`badge ${dept.active ? 'bg-success' : 'bg-danger'}`}>
                              {dept.active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td>
                            <div className="btn-group" role="group">
                              <button className="btn btn-sm btn-outline-primary">
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
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">Notification Settings</h5>
              </div>
              <div className="card-body">
                <div className="row g-4">
                  <div className="col-12">
                    <h6 className="text-muted">Email Notifications</h6>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="emailNotifications"
                        checked={settings.emailNotifications}
                        onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Enable email notifications
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newReportEmail"
                      />
                      <label className="form-check-label" htmlFor="newReportEmail">
                        Notify administrators of new reports
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="statusUpdateEmail"
                      />
                      <label className="form-check-label" htmlFor="statusUpdateEmail">
                        Notify citizens of report status updates
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <h6 className="text-muted">SMS Notifications</h6>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="smsNotifications"
                        checked={settings.smsNotifications}
                        onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="smsNotifications">
                        Enable SMS notifications
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="urgentSMS"
                      />
                      <label className="form-check-label" htmlFor="urgentSMS">
                        Send SMS for urgent reports only
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">Security Settings</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={settings.sessionTimeout}
                      onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password Policy</label>
                    <select className="form-select">
                      <option>Standard (8+ characters)</option>
                      <option>Strong (12+ chars, mixed case, numbers)</option>
                      <option>Very Strong (16+ chars, all requirements)</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="twoFactor"
                      />
                      <label className="form-check-label" htmlFor="twoFactor">
                        Require two-factor authentication for administrators
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="loginLogging"
                      />
                      <label className="form-check-label" htmlFor="loginLogging">
                        Log all login attempts
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ipWhitelist"
                      />
                      <label className="form-check-label" htmlFor="ipWhitelist">
                        Enable IP address whitelisting for admin access
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* System Settings */}
          {activeTab === 'system' && (
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">System Settings</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Reports Per Page</label>
                    <select
                      className="form-select"
                      value={settings.reportsPerPage}
                      onChange={(e) => handleSettingChange('reportsPerPage', e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">System Status</label>
                    <div className="form-check form-switch mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="maintenanceMode"
                        checked={settings.maintenanceMode}
                        onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="maintenanceMode">
                        Maintenance Mode
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="text-muted">System Information</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="bg-light p-3 rounded">
                          <strong>Version:</strong> 2.1.0<br/>
                          <strong>Database:</strong> PostgreSQL 13.4<br/>
                          <strong>Server:</strong> Ubuntu 20.04 LTS
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-light p-3 rounded">
                          <strong>Uptime:</strong> 15 days, 4 hours<br/>
                          <strong>Storage Used:</strong> 2.3 GB / 10 GB<br/>
                          <strong>Active Users:</strong> 1,247
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="text-muted">System Actions</h6>
                    <div className="btn-group me-2 mb-2">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-download me-1"></i>
                        Backup Database
                      </button>
                      <button className="btn btn-outline-warning">
                        <i className="bi bi-arrow-clockwise me-1"></i>
                        Clear Cache
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-file-earmark-text me-1"></i>
                        Export Logs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings