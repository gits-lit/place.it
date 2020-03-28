import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BuildingCarousel from '../components/BuildingCarousel';
import { setBuildingType } from '../actions/buildingActions';
import buildingTypes from '../assets/building-types.json'

let buildings = []

for (let building in buildingTypes) {
  buildings.push([building, buildingTypes[building]]);
}

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
      buildings={buildings}
      />
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  { setBuildingType }
)(BuildingCarouselContainer);
