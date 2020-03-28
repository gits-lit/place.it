import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const Button = props => {
  return (
    <NavLink to={props.link}>
      <div className="home-button">
        {props.text}
      </div>
    </NavLink>
  );
};

export default Button;
