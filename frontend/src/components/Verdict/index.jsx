import React, { useEffect } from 'react';

import badScore from '../../assets/bad_score.svg';
import goodScore from '../../assets/good_score.svg';
import './style.less';

const Verdict = props => {
  return (
    <div className="verdict-card">
      <div className="score-wrapper">
        <h1 className="title">Final Verdict</h1>
        <div className="horizontal-verdict">
          <div className="horizontal-items">
            <img src={props.score <= 2.7 ? badScore : goodScore} alt="icon" />
            <h1 style={{
                color: `${props.score <= 2.7 ? '#E76070' : '#72D66A'}`
              }}>{props.grade}</h1>
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
