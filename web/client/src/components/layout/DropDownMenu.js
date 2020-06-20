import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DropDownMenu = ({ menu, clickCounter }) => {
  const [isActive, setActive] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);

  useEffect(() => {
    if(clickCounter % 2 === 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [clickCounter]);

  useEffect(() => {
    let menuContent = '';
    switch (menu) {
      case "zones":
        setActive(true);
        menuContent = getZonesMenuContent();
        setDropdownContent(menuContent);
        break;

      case "notifications":
        setActive(true);
        menuContent = getNotificationsMenuContent();
        setDropdownContent(menuContent);
        break;

      case "profile":
        setActive(true);
        menuContent = getProfileMenuContent();
        setDropdownContent(menuContent);
        break;
    
      default:
        setActive(false);
        break;
    }
  }, [menu]);

  const getZonesMenuContent = () => {
    return (
      <>
        <li><Link to="/">Zone 1</Link></li>
        <li><Link to="/">Zone 2</Link></li>
        <li><Link to="/">Zone 3</Link></li>
      </>
    );
  }

  const getNotificationsMenuContent = () => {
    return (
      <>
        <li><Link to="/">Notif 1</Link></li>
        <li><Link to="/">Notif 2</Link></li>
        <li><Link to="/">Notif 3</Link></li>
      </>
    );
  }

  const getProfileMenuContent = () => {
    return (
      <>
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/">Settings</Link></li>
        <li><Link to="/">Logout</Link></li>
      </>
    );
  }

  return (
    <ul className={`dropdown-menu ${isActive ? 'active' : ''}`}>
      { dropdownContent }
    </ul>
  );
}

DropDownMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  clickCounter: PropTypes.number.isRequired
};

export default DropDownMenu;
