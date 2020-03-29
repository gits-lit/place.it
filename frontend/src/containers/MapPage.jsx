import React from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';
import NavBar from '../components/NavBar';
import SideBar from '../containers/SideBar';
import Score from '../components/Score';
import { placeBuilding, loadBuildings } from '../utils/buildings';

// TODO Something is being weird and not letting me use props but then again
// it's 6AM  and I'm so sleepy. See if I can fix this later but in any case it
// works.
let color = '';
let width, height, length = 0;

const MapPage = (props) => {

  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    if(color == '') {
      // TODO: Notify
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
    else {
      placeBuilding(map, lng, lat, color, length, width, height);
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
  return ({
    color: state.building.color,
    height: state.building.height,
    length: state.building.length,
    width: state.building.width,

  })
};

export default connect(
  mapStateToProps
)(MapPage);
