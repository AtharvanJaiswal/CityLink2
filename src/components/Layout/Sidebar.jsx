import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ collapsed }) => {
  const location = useLocation()
  const [openDropdowns, setOpenDropdowns] = useState({})

  const menuItems = [
    { path: '/citybank', icon: 'bi-bank', label: 'Citybank', hasDropdown: true, badge: '5' },
    { path: '/dashboard', icon: 'bi-speedometer2', label: 'Dashboard', hasDropdown: true },
    { path: '/reports', icon: 'bi-file-text', label: 'Reports', badge: 'New' },
    { path: '/users', icon: 'bi-people', label: 'Users' },
    { path: '/analytics', icon: 'bi-graph-up', label: 'Analytics' },
    { path: '/settings', icon: 'bi-gear', label: 'Settings' }
  ]

  const toggleDropdown = (path, e) => {
    e.preventDefault()
    setOpenDropdowns(prev => ({
      ...prev,
      [path]: !prev[path]
    }))
  }

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Background Overlay */}
      <div className="sidebar-overlay"></div>
      
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <i className="bi bi-link-45deg"></i>
          </div>
          {!collapsed && (
            <div className="logo-content">
              <span className="logo-text">CityLink</span>
              <span className="logo-subtitle">Management Portal</span>
            </div>
          )}
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={(e) => handleNavClick(item, e)}
              >
                <div className="nav-link-content">
                  <div className="nav-left">
                    <div className="nav-icon-wrapper">
                      <i className={`${item.icon} nav-icon`}></i>
                    </div>
                    {!collapsed && (
                      <span className="nav-text">{item.label}</span>
                    )}
                  </div>
                  
                  {!collapsed && (
                    <div className="nav-right">
                      {item.badge && (
                        <span className={`nav-badge ${item.badge === 'New' ? 'badge-new' : 'badge-count'}`}>
                          {item.badge}
                        </span>
                      )}
                      {item.hasDropdown && (
                        <i className={`bi bi-chevron-right dropdown-arrow ${openDropdowns[item.path] ? 'rotated' : ''}`}></i>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Active indicator */}
                <div className="active-indicator"></div>
              </Link>
              
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="nav-tooltip">
                  <span>{item.label}</span>
                  {item.badge && <span className="tooltip-badge">{item.badge}</span>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      {!collapsed && (
        <div className="sidebar-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="bi bi-samsung"></i>
            </div>
            <div className="footer-text">
              <span className="footer-brand">Samsung</span>
              <span className="footer-version">v2.1.0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar