import React from 'react';

import Map from '../components/Map';
import { placeBuilding, loadBuildings } from '../utils/buildings';

const MapPage = () => {
  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    placeBuilding(map, lng, lat);
    console.log(lng, lat);
  }

  const mapLoad = (map) => {
    loadBuildings(map);
  }

  return (
    <div>
      <Map mapClick={mapClick} mapLoad={mapLoad}/>
    </div>
  );
};

export default MapPage;
