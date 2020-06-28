import React from 'react';
import { Link } from 'react-router-dom';

const NotificationsMenu = () => {
  return (
    <>
      <li><Link to="/">Notif 1</Link></li>
      <li><Link to="/">Notif 2</Link></li>
      <li><Link to="/">Notif 3</Link></li>
    </>
  );
}

export default NotificationsMenu;
