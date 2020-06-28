import React from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  return (
    <>
      <li><Link to="/">Profile</Link></li>
      <li><Link to="/">Settings</Link></li>
      <li><Link to="/">Logout</Link></li>
    </>
  );
}

export default ProfileMenu;
