import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const ShowZone = ({ zone }) => {
  const handleGoogleMapApi = google => {
    const zonePolygon = new google.maps.Polygon({
      paths: [zone.coords],
      strokeColor: '#333',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#999',
      fillOpacity: 0.2,
    });
    
    zonePolygon.setMap(google.map);
  }

  return (
    <div style={{ height: '87vh', width: '100%' }}>
      <GoogleMapReact
        center={zone.center}
        zoom={zone.zoom}
        bootstrapURLKeys={{ libraries: 'drawing', key:'AIzaSyCYvnRe-6xDdpzBcN5eYQ-5wNM6wFJHvNQ' }}
        onGoogleApiLoaded={handleGoogleMapApi}
      />
    </div>
  );
}

ShowZone.propTypes = {
  zone: PropTypes.object.isRequired
};

export default ShowZone;
