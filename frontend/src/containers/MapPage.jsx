import React from 'react';

import Map from '../components/Map';
import { placeBuilding } from '../utils/buildings';

const MapPage = () => {
  const mapClick = (map, event) => {
    const coords = event.lngLat;
    const lng = coords.lng;
    const lat = coords.lat;
    placeBuilding(map, lng, lat);
    console.log(lng, lat);
  }


  return (
    <div>
      <Map mapClick={mapClick}/>
    </div>
  );
};

export default MapPage;
