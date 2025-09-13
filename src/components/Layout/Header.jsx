import React from 'react'
import './Header.css'

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="btn btn-link sidebar-toggle"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>
        <h4 className="header-title mb-0">Welcome, Administrator</h4>
      </div>
      
      <div className="header-right">
        <div className="user-profile">
          <div className="user-avatar">
            <i className="bi bi-person-circle"></i>
          </div>
          <span className="user-name">User Profile Name</span>
        </div>
        
        <button className="btn btn-link menu-toggle">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </header>
  )
}

export default Header