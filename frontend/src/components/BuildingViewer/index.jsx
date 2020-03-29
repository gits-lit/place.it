import React from 'react';

import { Modal } from 'antd';
import BuildingCarousel from '../../containers/BuildingCarousel';

import icon from '../../assets/icon.svg';
import './style.less';

const BuildingViewer = props => {
  return (
    <Modal width={700} visible={props.vis} onCancel={props.setVis}>
      <div className="building-viewer">
        <div className="header">
          <img src={icon} alt="icon" />
          <h1>
            <b>Buildings</b> | Viewer
          </h1>
        </div>
        <div className="col">
          <BuildingCarousel />
          <h1>
            <b>Building Name:</b> UC San Diego
          </h1>
          <h1><b>Size (sqft):</b> 3022ft</h1>
          <h1><b>Height (ft):</b> 300ft</h1>
          <h1><b>Occupancy:</b> 421</h1>
        </div>
      </div>
    </Modal>
  );
};

export default BuildingViewer;
