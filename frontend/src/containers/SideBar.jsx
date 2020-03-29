import React from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import { updateBuildingForm } from '../actions/buildingActions';

const SideBarForm = props => {

  const setValue = (key, value) => {
    props.updateBuildingForm(key, value);
  }

  return (
    <SideBar
      setValue={setValue}
    />
  );
};

const mapStateToProps = state => ({
  name: state.building.name,
  occupancy: state.building.occupancy,
  height: state.building.height,
  length: state.building.length,
  width: state.building.width,
  siz: state.building.size
});

export default connect(
  mapStateToProps,
  { updateBuildingForm }
)(SideBarForm);
