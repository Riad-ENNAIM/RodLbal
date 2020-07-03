import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authAction';
import Navbar from '../layout/Navbar';
import Map from '../maps/Map';

const HomePage = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />

      <Map />
    </>
  );
}

HomePage.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { loadUser }
)(HomePage);
