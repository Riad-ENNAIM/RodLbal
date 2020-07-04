import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authAction';
import Page from '../layout/Page';
import Zones from '../zones/Zones';

const HomePage = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    
    // eslint-disable-next-line
  }, []);

  return (
    <Page>
      <Zones />
    </Page>
  );
}

HomePage.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { loadUser }
)(HomePage);
