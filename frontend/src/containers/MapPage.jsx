import React from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { placeBuilding, loadBuildings } from '../utils/buildings';

// TODO Something is being weird and not letting me use props but then again
// it's 6AM  and I'm so sleepy. See if I can fix this later but in any case it
// works.
let color = '';

const MapPage = (props) => {

  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    if(color == '') {
      // TODO: Notify
      console.log('No color was selected please use notify function!!');
    }
    else {
      placeBuilding(map, lng, lat, color);
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
    </div>
  );
};

const mapStateToProps = state => {
  color = state.building.color;
  return ({
    color: state.building.color
  })
};

export default connect(
  mapStateToProps
)(MapPage);
