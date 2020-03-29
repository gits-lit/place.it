import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BuildingViewer from '../components/BuildingViewer';

const BuildingViewerContainer = props => {
  return (
    <BuildingViewer
      data={props.data}
      vis={props.vis}
      setVis={props.setVis}
      />
  );
};

const mapStateToProps = state => ({
  data: state.data.data
});

export default connect(
  mapStateToProps,
  { }
)(BuildingViewerContainer);
