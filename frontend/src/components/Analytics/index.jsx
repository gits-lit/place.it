import React from 'react';

import { Modal } from 'antd';
import Verdict from '../../components/Verdict';
import Statistic from '../../components/Statistic';

import icon from '../../assets/icon.svg';
import './style.less';

const Analytics = props => {
  return (
    <Modal width={1100} visible={props.vis} onCancel={props.setVis}>
      <div className="text-wrapper">
        <div className="header">
          <img src={icon} alt="icon" />
          <h1>
            <b>Los Angeles Buildings</b> | Analytics Summary
          </h1>
        </div>
        <div className="row-1">
          <div className="text">
            <h3>How we analyze our data:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              vulputate lacus, sit amet consectetur neque. Aliquam volutpat
              gravida erat, accumsan interdum libero viverra id. Donec sit amet
              iaculis ante. Aenean euismod quam ac vulputate posuere. Donec
              neque lectus, malesuada non erat vel.
            </p>
          </div>
          <Verdict />
        </div>
        <div className="row-2">
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
          <Statistic />
        </div>
      </div>
    </Modal>
  );
};

export default Analytics;
