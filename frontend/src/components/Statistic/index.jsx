import React from 'react';

import wavy_blob from '../../assets/wavy_blob.svg';
import './style.less';

const Statistic = props => {
  return (
    <div className="statistic-card">
      <div className="score-wrapper">
        <h1 className="title">Replace w/prop</h1>
        <h1 className="stats">2302</h1>
        <img className="blobs" src={wavy_blob} alt="icon" />
        <h2>Amount of cats</h2>
      </div>
    </div>
  );
};

export default Statistic;
