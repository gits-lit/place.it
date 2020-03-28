import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw'
});

const MapComponent = (props) => {
  return (
    <Map
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[-118.2437, 34.0522]}
      onClick={props.mapClick}
      pitch = {[60]}
      style="mapbox://styles/mapbox/light-v10"
      zoom = {[15]}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
}

export default MapComponent;
