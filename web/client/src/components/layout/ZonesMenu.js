import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ZonesMenu = ({ zone: { zones, loading } }) => {
  if(!zones || loading)
    return <h1>Loading ...</h1>

  return (
    zones.map(zone => <li key={zone._id}><Link to={`/zone/${zone._id}`}>{zone._id}</Link></li>)
  );
}

ZonesMenu.propTypes = {
  zone: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  zone: state.zone
});

export default connect(
  mapStateToProps
)(ZonesMenu);
