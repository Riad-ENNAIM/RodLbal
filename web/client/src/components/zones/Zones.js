import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getZones } from '../../actions/zoneAction';
import CreateZone from './CreateZone';

const Map = ({ zone: { zones, loading, activeDrawZone }, getZones }) => {
  useEffect(() => {
    getZones();

    // eslint-disable-next-line
  }, []);

  if(!zones || loading)
    return <h1>loading ...</h1>
  else if(zones.length === 0 || activeDrawZone)
    return <CreateZone />

  return <h1>Zones List</h1>
}

Map.propTypes = {
  zone: PropTypes.object.isRequired,
  getZones: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  zone: state.zone
});

export default connect(
  mapStateToProps,
  { getZones }
)(Map);
