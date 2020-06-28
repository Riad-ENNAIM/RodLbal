import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleDorpdownMenu } from '../../actions/navbarAction';
import ZonesMenu from './ZonesMenu';
import NotificationsMenu from './NotificationsMenu';
import ProfileMenu from './ProfileMenu';

const DropDownMenu = ({ menu, toggleDorpdownMenu }) => {
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if(event.target && (event.target.classList.contains(menu) || (event.target.parentElement && event.target.parentElement.classList.contains(menu)))) {
        toggleDorpdownMenu(true);
      } else {
        toggleDorpdownMenu(dropDownRef.current && dropDownRef.current.contains(event.target));
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line
  }, [menu]);

  return (
    <ul className="dropdown-menu active" ref={dropDownRef}>
      {
        menu === 'zones' ?
          <ZonesMenu />
        :
          menu === 'notifications' ?
            <NotificationsMenu />
          :
            menu === 'profile' ?
              <ProfileMenu />
            :
              null
      }
    </ul>
  );
}

DropDownMenu.propTypes = {
  toggleDorpdownMenu: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleDorpdownMenu }
)(DropDownMenu);
