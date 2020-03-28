import React from 'react';

import './style.less';
import BuildingCarousel from '../../containers/BuildingCarousel';

const SideBar = () => {
  return (
    <div className="map-side-bar">
      <h1>Create Your Building</h1>
      <BuildingCarousel />
    </div>
  );
};

export default SideBar;
