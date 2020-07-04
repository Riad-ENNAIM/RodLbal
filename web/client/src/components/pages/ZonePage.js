import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/authAction';
import { getZone } from '../../actions/zoneAction';
import Page from '../layout/Page';
import ShowZone from '../zones/ShowZone';

const ZonePage = ({ zone: { loading, currentZone }, loadUser, getZone }) => {
  const { currentZoneId } = useParams();

  useEffect(() => {
    loadUser();

    if(currentZoneId)
      getZone(currentZoneId);
    
    // eslint-disable-next-line
  }, []);

  return (
    <Page>
      {
        loading || !currentZone ?
          <h1>loading ...</h1>
        :
          <ShowZone zone={currentZone} />
      }
    </Page>
  );
}

ZonePage.propTypes = {
  zone: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  getZone: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  zone: state.zone
});

export default connect(
  mapStateToProps,
  { loadUser, getZone }
)(ZonePage);
