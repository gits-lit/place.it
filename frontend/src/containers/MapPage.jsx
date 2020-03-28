import React from 'react';

import Map from '../components/Map';

const MapPage = () => {
  const mapClick = (_, event) => {
    const coords = event.lngLat;
    console.log(coords);
  }


  return (
    <div>
      <Map mapClick={mapClick}/>
    </div>
  );
};

export default MapPage;
