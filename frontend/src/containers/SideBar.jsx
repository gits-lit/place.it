import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import { updateBuildingForm } from '../actions/buildingActions';
import { clearBuildings } from '../actions/mapActions';

const SideBarForm = props => {

  const setValue = (key, value) => {
    props.updateBuildingForm(key, value);
  }

  const clearBuildings = () => {
    console.log('clearing i think')
    props.clearBuildings(window.map);
  }

  return (
    <SideBar
      setValue={setValue}
      clearBuildings={clearBuildings}
    />
  );
};

const mapStateToProps = state => ({
  name: state.building.name,
  occupancy: state.building.occupancy,
  height: state.building.height,
  length: state.building.length,
  width: state.building.width,
  size: state.building.size,
  map: state.building.map
});

export default connect(
  mapStateToProps,
  { updateBuildingForm, clearBuildings }
)(SideBarForm);
