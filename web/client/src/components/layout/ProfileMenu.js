import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authAction';

const ProfileMenu = ({ logout }) => {
  return (
    <>
      <li><Link to="/">Profile</Link></li>
      <li><Link to="/">Settings</Link></li>
      <li><span className="link" onClick={logout}>Logout</span></li>
    </>
  );
}

ProfileMenu.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(
  null,
  { logout }
)(ProfileMenu);
