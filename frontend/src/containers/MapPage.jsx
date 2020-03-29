import React, { useState } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';
import NavBar from '../components/NavBar';
import SideBar from './SideBar';
import Score from './Score';
import Analytics from '../components/Analytics';
import BuildingViewer from '../components/BuildingViewer';
import { notify } from '../utils';
import {
  placeBuilding,
  loadBuildings,
  addBuildings
} from '../actions/mapActions';
import { getData } from '../actions/dataActions';

// TODO Something is being weird and not letting me use props but then again
// it's 6AM  and I'm so sleepy. See if I can fix this later but in any case it
// works.
let type,
  name,
  color = '';
let width,
  height,
  length,
  size,
  occupancy = 0;
let buildings = [];

const MapPage = props => {

  const [vis, setVis] = useState(false);
  const [vis1, setVis1] = useState(false);


  const calculateScore = () => {
    setVis(true);
    props.getData(buildings);
  }

  const addBuildings = (lat, lng) => {
    props.addBuildings(lat, lng);
  }

  const placeBuilding = (map, lng, lat, color, length, width, height) => {
    props.placeBuilding(map, lng, lat, color, length, width, height);
  }

  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    // Yes i know this is shit but my brain is too sleep deprived
    if (color == '') {
      notify('Error', "NGL, that shouldn't have been possible");
    } else if (type == null || type == '') {
      notify('Error', "NGL, that shouldn't have been possible");
    } else if (name == null || name == '') {
      notify(
        'Missing Name',
        'Fill out the form to place a building on the map!'
      );
    } else if (occupancy == null || occupancy == 0) {
      notify(
        'Missing Occupancy',
        'Fill out the form to place a building on the map!'
      );
    } else if (height == null || height == 0) {
      notify(
        'Missing Height',
        'Fill out the form to place a building on the map!'
      );
    } else if (length == null || length == 0) {
      notify(
        'Missing Length',
        'Fill out the form to place a building on the map!'
      );
    } else if (width == null || width == 0) {
      notify(
        'Missing Width',
        'Fill out the form to place a building on the map!'
      );
    } else if (size == null || size == 0) {
      notify(
        'Missing Size',
        'Fill out the form to place a building on the map!'
      );
    } else {
      placeBuilding(map, lng, lat, color, length, width, height);
      addBuildings(lat, lng);
    }
  };

  const mapLoad = map => {
    window.map = map;
    loadBuildings(map);
  };

  return (
    <div>
      <SideBar calculateScore={calculateScore} />
      <NavBar calculateScore={calculateScore} viewBuildings={() => setVis1(true)}/>
      <Analytics vis={vis} setVis={() => setVis(false)} />
      <BuildingViewer vis={vis1} setVis={() => setVis1(false)} />
      <Map mapClick={mapClick} mapLoad={mapLoad} />
      <Score />
    </div>
  );
};

const mapStateToProps = state => {
  color = state.building.color;
  length = state.building.length;
  width = state.building.width;
  height = state.building.height;
  type = state.building.type;
  name = state.building.name;
  occupancy = state.building.occupancy;
  size = state.building.size;
  buildings = state.building.buildings;
  return {
    color: state.building.color,
    height: state.building.height,
    length: state.building.length,
    width: state.building.width,
    map: state.building.map,
    buildings: state.building.buildings
  };
};

export default connect(
  mapStateToProps,
  { addBuildings, loadBuildings, placeBuilding, getData }
)(MapPage);
