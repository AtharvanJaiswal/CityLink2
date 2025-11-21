// import React from 'react'
import StatsCards from '../components/Dashboard/StatsCards'
import MapView from '../components/Dashboard/MapView'
import Analytics from '../components/Dashboard/Analytics'
import ReportsList from '../components/Dashboard/ReportsList'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row g-3">
        {/* Stats Cards */}
        <div className="col-12">
          <StatsCards />
        </div>
        
        {/* Map and Reports */}
        <div className="col-lg-8">
          <div className="row g-3">
            <div className="col-12">
              <MapView />
            </div>
            <div className="col-12">
              <Analytics />
            </div>
          </div>
        </div>
        
        {/* Reports List */}
        <div className="col-lg-4">
          <ReportsList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
