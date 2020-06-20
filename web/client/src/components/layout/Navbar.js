import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';

const Navbar = () => {
  const [dropdownContent, setDropdownContent] = useState(null);
  const [clickCounter, setClickCounter] = useState(0);

  const onClick = menu => {
    setDropdownContent(menu);
    let counter = dropdownContent === menu ? clickCounter + 1 : 0;
    setClickCounter(counter);
  }

  return (
    <nav id="navbar">
      <div className="banner">
        <div className="search">

        </div>

        <ul className="navigation">
          <li>
            <button className="btn btn-round btn-center btn-smooth"
              title="Add New Zone"
            >
              <i className="fas fa-plus"></i>
            </button>
          </li>

          <li>
            <button className="btn btn-round btn-center btn-primary"
              title="Zones List"
              onClick={() => onClick("zones")}
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </li>

          <li>
            <button className="btn btn-round btn-center btn-primary"
              title="Notifications"
              onClick={() => onClick("notifications")}
            >
              <i className="fas fa-bell"></i>
            </button>
          </li>

          <li>
            <span className="btn btn-round btn-center btn-primary"
              title="Profile"
              onClick={() => onClick("profile")}
            >
               <i className="fas fa-user"></i>
            </span>
          </li>
        </ul>
      </div>

      {
        dropdownContent && (
          <DropDownMenu menu={dropdownContent} clickCounter={clickCounter}/>
        )
      }
    </nav>
  );
}

export default Navbar;
