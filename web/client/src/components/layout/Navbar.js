import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleDorpdownMenu } from '../../actions/navbarAction';
import { toggleDrawZone } from '../../actions/zoneAction';
import DropDownMenu from './DropDownMenu';
import SearchInput from './SearchInput';

const Navbar = ({ navbar: { isOpen }, toggleDorpdownMenu, toggleDrawZone }) => {
  const history = useHistory();

  const [dropdownContent, setDropdownContent] = useState(null);

  const onClick = menu => {
    if(!isOpen) {
      toggleDorpdownMenu(true);
    } else {
      toggleDorpdownMenu(false);
    }

    setDropdownContent(menu);
  }

  const goToCreateZone = () => {
    toggleDrawZone(true);
    history.push('/')
  }

  return (
    <nav id="navbar">
      <div className="banner">
        <div className="search">
          <SearchInput />
        </div>

        <ul className="navigation">
          <li>
            <button className="btn btn-round btn-center btn-smooth"
              title="Add New Zone"
              onClick={goToCreateZone}
            >
              <i className="fas fa-plus"></i>
            </button>
          </li>

          <li>
            <button className="btn btn-round btn-center btn-primary zones"
              title="Zones List"
              onClick={() => onClick("zones")}
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </li>

          <li>
            <button className="btn btn-round btn-center btn-primary notifications"
              title="Notifications"
              onClick={() => onClick("notifications")}
            >
              <i className="fas fa-bell"></i>
            </button>
          </li>

          <li>
            <span className="btn btn-round btn-center btn-primary profile"
              title="Profile"
              onClick={() => onClick("profile")}
            >
               <i className="fas fa-user"></i>
            </span>
          </li>
        </ul>
      </div>

      {
        dropdownContent && isOpen && (
          <DropDownMenu menu={dropdownContent} />
        )
      }
    </nav>
  );
}

Navbar.propTypes = {
  navbar: PropTypes.object.isRequired,
  toggleDorpdownMenu: PropTypes.func.isRequired,
  toggleDrawZone: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  { toggleDorpdownMenu, toggleDrawZone }
)(Navbar);
