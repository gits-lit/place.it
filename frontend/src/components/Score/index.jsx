import React from 'react';

import bad_score from '../../assets/bad_score.svg'
import './style.less';

const Score = props => {
  return (
    <div className="score-card">
      <div className="score-wrapper">
        <h1 className="title">Previous Place Score</h1>
        <div className="horizontal-items">
          <img src={bad_score} alt="icon" />
          <h1>C-</h1>
        </div>
      </div>
    </div>
  );
};

export default Score;
