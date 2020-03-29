import React from 'react';

import wavy_blob from '../../assets/wavy_blob.svg';
import wavy_blob_green from '../../assets/wavy_blob_green.svg';
import './style.less';

const Statistic = props => {
  return (
    <div className="statistic-card">
      <div className="score-wrapper" style={{
          color: `${props.color ? '#72D66A' : '#E76070'}`
        }}>
        <div className="title">{props.title}</div>
        <div className="stats">{props.stats}</div>
        <img className="blobs" src={props.color ? wavy_blob_green : wavy_blob} alt="icon"  style={{
            transform: `rotate(${Math.random() * 300}deg)`
          }}/>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

export default Statistic;
