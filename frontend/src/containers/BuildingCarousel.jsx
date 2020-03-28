import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BuildingCarousel from '../components/BuildingCarousel';
import { setBuildingType } from '../actions/buildingActions';

const BuildingCarouselContainer = props => {

  const setType = (index) => {
    props.setBuildingType(index);
  }

  useEffect(() => {
    setType(0);
  }, []);

  const onChange = (index) => {
    setType(index);
  }

  return (
    <BuildingCarousel
      onChange={onChange}
      onClick={props.onClick}
      />
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  { setBuildingType }
)(BuildingCarouselContainer);
