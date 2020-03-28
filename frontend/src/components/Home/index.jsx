import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import building_1 from '../../assets/building_1.svg';
import wavy_left from '../../assets/wavy_left.svg';
import wavy_right from '../../assets/wavy_right.svg';

import './style.less';

const Home = () => {
  return (
    <>
      <nav className="home-nav-bar">
        <NavLink to="/">
          <p>about us</p>
        </NavLink>
        <NavLink to="/">
          <p>blog</p>
        </NavLink>
        <img src={logo} alt="logo" />
        <NavLink to="/">
          <p>contact us</p>
        </NavLink>
        <NavLink to="/">
          <p className="button">Sign Up</p>
        </NavLink>
      </nav>
      <div className="home-page">
        <div className="item-wrapper">
          <div className="text">
            <p>Envision the Best Future For Your City</p>
            <h1>Urban Planning</h1>
            <h1>　　　　Done Right</h1>
            <div className="buttons">
              <NavLink to="/signup">
                <div className="home-button">Sign Up</div>
              </NavLink>
              <NavLink to="/map">
                <div className="home-button">Try Demo</div>
              </NavLink>
            </div>
          </div>
          <img className="building_1" src={building_1} alt="building" />
        </div>
        <img className="wLeft" src={wavy_left} alt="wavy_1" />
        <img className="wRight" src={wavy_right} alt="wavy_2" />
      </div>
    </>
  );
};

export default Home;
