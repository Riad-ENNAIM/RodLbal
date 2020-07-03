import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getZones } from '../../actions/zoneAction';

const ZonesMenu = ({ zone: { zones, loading }, getZones }) => {
  useEffect(() => {
    getZones();

    // eslint-disable-next-line
  }, []);

  if(!zones || loading) {
    return <h1>Loading ...</h1>
  }

  return (
    zones.map(zone => <li><Link to="/">{zone._id}</Link></li>)
  );
}

ZonesMenu.propTypes = {
  zone: PropTypes.object.isRequired,
  getZones: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  zone: state.zone
});

export default connect(
  mapStateToProps,
  { getZones }
)(ZonesMenu);
