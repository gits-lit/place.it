import React from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';
import NavBar from '../components/NavBar';
import SideBar from '../containers/SideBar';
import Score from '../components/Score';
import { placeBuilding, loadBuildings, addBuildings } from '../actions/mapActions';

// TODO Something is being weird and not letting me use props but then again
// it's 6AM  and I'm so sleepy. See if I can fix this later but in any case it
// works.
let type, name, color = '';
let width, height, length, size, occupancy = 0;

const MapPage = (props) => {

  const addBuildings = () => {
    props.addBuildings();
  }

  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    // Yes i know this is shit but my brain is too sleep deprived
    if(color == '') {
      console.log('No color was selected please use notify function!!');
    }
    else if (length == null || length == 0) {
      console.error('Length is null');
    }
    else if (width == null || width == 0) {
      console.error('Width is null');
    }
    else if (height == null || height == 0) {
      console.error('height is null');
    }
    else if (size == null || size == 0) {
      console.error('size is null');
    }
    else if (occupancy == null || occupancy == 0) {
      console.error('occupancy is null');
    }
    else if (type == null || type == '') {
      console.error('type is null');
    }
    else if (name == null || name == '') {
      console.error('name is null');
    }
    else {
      placeBuilding(map, lng, lat, color, length, width, height);
      addBuildings();
    }
  }

  const mapLoad = (map) => {
    loadBuildings(map);
  }

  return (
    <div>
      <SideBar />
      <NavBar />
      <Map mapClick={mapClick} mapLoad={mapLoad}/>
      <Score />
    </div>
  );
};

const mapStateToProps = state => {
  color = state.building.color;
  length = state.building.length;
  width = state.building.width;
  height = state.building.height;
  type =  state.building.type;
  name = state.building.name;
  occupancy = state.building.occupancy;
  size = state.building.size;
  return ({
    color: state.building.color,
    height: state.building.height,
    length: state.building.length,
    width: state.building.width,

  })
};

export default connect(
  mapStateToProps,
  { addBuildings }
)(MapPage);
