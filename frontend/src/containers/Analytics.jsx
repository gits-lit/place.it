import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Analytics from '../components/Analytics';

const AnalyticsContainer = props => {
  return (
    <Analytics vis={props.vis} setVis={() => props.setVis(false)}
      num={props.num}
      trees={props.trees}
      carbon={props.carbon}
      propVal={props.propVal}
      tax={props.tax}
      crimes={props.crimes}
      parking={props.parking}
      transitGrade={props.transitGrade}
      walkingGrade={props.walkingGrade}/>
  );
};

const mapStateToProps = state => ({
  num: state.data.num,
  trees: state.data.trees,
  carbon: state.data.carbon,
  propVal: state.data.propVal,
  crimes: state.data.crimes,
  tax: state.data.tax,
  parking: state.data.parking,
  walkingGrade: state.data.walkingGrade,
  transitGrade: state.data.transitGrade
});

export default connect(
  mapStateToProps,
  null
)(AnalyticsContainer);
