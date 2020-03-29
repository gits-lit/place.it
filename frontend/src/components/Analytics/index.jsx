import React from 'react';

import { Modal } from 'antd';
import Verdict from '../../containers/Verdict';
import Statistic from '../../components/Statistic';
import { gradeToScore } from '../../utils';

import icon from '../../assets/icon.svg';
import './style.less';

const Analytics = props => {
  return (
    <Modal width={1100} visible={props.vis} onCancel={props.setVis}>
      <div className="building-wrapper">
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
              We leverage datasets provided by the City of Los Angeles,
              WalkScore, SpotCrime, Estated and proprietary machine learning
              algorithms to make our best assessment of your building. Our
              assessments are meant to serve as a guideline for construction,
              and are not 100% accurate. More detail can be found here.
            </p>
          </div>
          <Verdict tips={props.tips} />
        </div>
        <div className="row-2">
          <Statistic
            title="Trees Killed"
            stats={props.trees}
            description={`Equal to ${props.trees * 6} tons of O2 lost`}
            color={props.trees == 0}
          />
          <Statistic
            title="Pollution Produced"
            stats={Math.floor(props.carbon)}
            description={`Tons of CO2 produced`}
            color={props.carbon < 5 * props.num}
          />
          <Statistic
            title="Property Value"
            stats={`$${(props.propVal / 1000000).toFixed(2)}m`}
            description={`$${(props.propVal / props.num / 1000000).toFixed(
              2
            )}m average per building`}
            color={props.propVal / props.num > 1000000}
          />
          <Statistic
            title="Tax Revenue"
            stats={`$${(props.tax / 1000).toFixed(1)}k`}
            description={`$${(props.tax / props.num / 1000).toFixed(
              2
            )}k average per building`}
            color={props.propVal / props.num > 20000}
          />
          <Statistic
            title="Number of Crimes"
            stats={props.crimes}
            description={
              props.crimes / props.num > 3
                ? 'Be careful out there!'
                : 'This is pretty safe.'
            }
            color={props.propVal / props.num <= 3}
          />
          <Statistic
            title="Parking Spots"
            stats={Math.floor(props.parking)}
            description={
              props.parking / props.num < 5
                ? "There's no parking in LA!"
                : 'Enough space for cars!'
            }
            color={props.propVal / props.num >= 5}
          />
          <Statistic
            title="Transit Grade"
            stats={props.transitGrade}
            description={
              gradeToScore(props.transitGrade) > 2.7
                ? 'You can get around easily! '
                : 'Transit needs improvement.'
            }
            color={gradeToScore(props.transitGrade) > 2.7}
          />
          <Statistic
            title="Walking Grade"
            stats={props.walkingGrade}
            description={
              gradeToScore(props.walkingGrade) > 2.7
                ? "There's lots of walking space."
                : 'Walking sucks here.'
            }
            color={gradeToScore(props.walkingGrade) > 2.7}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Analytics;
