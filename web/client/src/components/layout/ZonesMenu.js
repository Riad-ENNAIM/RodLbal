import React from 'react';
import { Link } from 'react-router-dom';

const ZonesMenu = () => {
  return (
    <>
      <li><Link to="/">Zone 1</Link></li>
      <li><Link to="/">Zone 2</Link></li>
      <li><Link to="/">Zone 3</Link></li>
    </>
  );
}

export default ZonesMenu;
