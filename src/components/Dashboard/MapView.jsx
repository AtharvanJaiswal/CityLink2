import React from 'react'
import './MapView.css'

const MapView = () => {
  const mapMarkers = [
    { id: 1, type: 'pothole', lat: 40.7128, lng: -74.0060, color: 'danger' },
    { id: 2, type: 'streetlight', lat: 40.7589, lng: -73.9851, color: 'warning' },
    { id: 3, type: 'water', lat: 40.7505, lng: -73.9934, color: 'info' },
    { id: 4, type: 'garbage', lat: 40.7282, lng: -73.7949, color: 'success' },
    { id: 5, type: 'traffic', lat: 40.6782, lng: -73.9442, color: 'primary' },
  ]

  return (
    <div className="card map-container shadow-sm">
      <div className="card-body p-0">
        <div className="map-view">
          {/* Map Street Grid */}
          <div className="map-streets">
            <div className="street horizontal street-1"></div>
            <div className="street horizontal street-2"></div>
            <div className="street horizontal street-3"></div>
            <div className="street horizontal street-4"></div>
            <div className="street vertical street-5"></div>
            <div className="street vertical street-6"></div>
            <div className="street vertical street-7"></div>
          </div>
          
          {/* Map Areas */}
          <div className="map-area area-1">
            <span className="area-label">Financial District</span>
          </div>
          <div className="map-area area-2">
            <span className="area-label">Downtown</span>
          </div>
          <div className="map-area area-3">
            <span className="area-label">Riverside</span>
          </div>
          <div className="map-area area-4">
            <span className="area-label">Industrial</span>
          </div>
          
          {/* Map Markers */}
          <div className="map-marker marker-danger" style={{ top: '25%', left: '30%' }}>
            <i className="bi bi-exclamation-triangle-fill"></i>
          </div>
          <div className="map-marker marker-warning" style={{ top: '40%', left: '60%' }}>
            <i className="bi bi-lightbulb-fill"></i>
          </div>
          <div className="map-marker marker-info" style={{ top: '60%', left: '45%' }}>
            <i className="bi bi-droplet-fill"></i>
          </div>
          <div className="map-marker marker-success" style={{ top: '70%', left: '25%' }}>
            <i className="bi bi-trash-fill"></i>
          </div>
          <div className="map-marker marker-primary" style={{ top: '35%', left: '80%' }}>
            <i className="bi bi-stoplights-fill"></i>
          </div>
          <div className="map-marker marker-warning" style={{ top: '55%', left: '70%' }}>
            <i className="bi bi-cone-striped"></i>
          </div>
          <div className="map-marker marker-danger" style={{ top: '80%', left: '60%' }}>
            <i className="bi bi-exclamation-circle-fill"></i>
          </div>
          <div className="map-marker marker-success" style={{ top: '20%', left: '70%' }}>
            <i className="bi bi-check-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapView