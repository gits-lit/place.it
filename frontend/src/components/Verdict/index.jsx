import React from 'react';

import bad_score from '../../assets/bad_score.svg';
import './style.less';

const Verdict = props => {
  return (
    <div className="verdict-card">
      <div className="score-wrapper">
        <h1 className="title">Final Verdict</h1>
        <div className="horizontal-verdict">
          <div className="horizontal-items">
            <img src={bad_score} alt="icon" />
            <h1>C-</h1>
          </div>
          <div className="tips">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
                vulputate lacus,
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
                vulputate lacus,
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verdict;
