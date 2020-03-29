import React from 'react';

import { Modal } from 'antd';
import './style.less';

const Analytics = props => {
  return (
    <Modal width={1100} visible={props.vis} onCancel={props.setVis}>
      <div className="text-wrapper">
        <div className="header">
          <h1>Facebook Campus | Analytics Summary</h1>
        </div>
      </div>
    </Modal>
  );
};

export default Analytics;
