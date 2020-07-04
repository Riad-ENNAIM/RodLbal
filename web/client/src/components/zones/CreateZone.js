import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addZone } from '../../actions/zoneAction';

const CreateZone = ({ addZone }) => {
  const handleGoogleMapApi = google => {
    const options = {
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon']
      }
    }

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(google.map);
    createZone(drawingManager, google);
  }

  const createZone = (drawingManager, google) => {
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
      drawingManager.setDrawingMode(null);

      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        const polygon = event.overlay.getPath().getArray();

        const zoneCenter = getZoneCenter(polygon, google);

        const zoneCoords = polygon.map(element => {
          const point = {};
          point.lat = element.lat();
          point.lng = element.lng();
          return point;
        });

        const newZone = {
          zoom: event.overlay.map.zoom,
          // center: event.overlay.map.center,
          center: zoneCenter,
          coords: zoneCoords
        };

        addZone(newZone);
      }
    });
  }

  const getZoneCenter = (polygonCoords, google) => {
    const lats = [],
          lngs = [];

    polygonCoords.forEach(point => {
      lngs.push(point.lng());
      lats.push(point.lat());
    });

    lats.sort();
    lngs.sort();
    const lowx = lats[0];
    const highx = lats[polygonCoords.length - 1];
    const lowy = lngs[0];
    const highy = lngs[polygonCoords.length - 1];

    const center_x = lowx + ((highx-lowx) / 2);
    const center_y = lowy + ((highy - lowy) / 2);

    return (new google.maps.LatLng(center_x, center_y));
  }

  return (
    <div style={{ height: '87vh', width: '100%' }}>
      <GoogleMapReact
        center={{lat: 31.63416, lng: -7.99994 }}
        zoom={9}
        bootstrapURLKeys={{ libraries: 'drawing', key:'AIzaSyCYvnRe-6xDdpzBcN5eYQ-5wNM6wFJHvNQ' }}
        onGoogleApiLoaded={handleGoogleMapApi}
      />
    </div>
  );
}

CreateZone.propTypes = {
  addZone: PropTypes.func.isRequired
};

export default connect(
  null,
  { addZone }
)(CreateZone);
