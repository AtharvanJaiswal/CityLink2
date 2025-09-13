import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './Layout.css'

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="layout-container">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout