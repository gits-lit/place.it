import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './style.less';

const NavBar = props => {
  return (
    <nav className="map-nav-bar">
      <NavLink to="/">
        <p>home</p>
      </NavLink>
      <div className="modal" onClick={props.viewBuildings}>
        <p>buildings</p>
      </div>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="modal" onClick={props.calculateScore}>
        <p>analytics</p>
      </div>
      <NavLink to="/">
        <p>profile</p>
      </NavLink>
    </nav>
  );
};

export default NavBar;
