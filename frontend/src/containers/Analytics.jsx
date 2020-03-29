import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Analytics from '../components/Analytics';

const AnalyticsContainer = props => {
  return (
    <Analytics vis={props.vis} setVis={() => props.setVis(false)}/>
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {}
)(AnalyticsContainer);
