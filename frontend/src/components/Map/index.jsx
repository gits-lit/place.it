import React, {useEffect} from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw'
});

const MapComponent = (props) => {
  useEffect(() => {
    console.log('hiiii');
  });
  return (
    <Map
      antialias={true}
      containerStyle={{
        height: '110vh',
        width: '100vw',
        position: 'absolute',
        right: '0'
      }}
      center={[-118.2437, 34.0522]}
      flyToOptions={{
        speed: 0
      }}
      onClick={props.mapClick}
      onStyleLoad={props.mapLoad}
      pitch = {[60]}
      style="mapbox://styles/mapbox/light-v10"
      zoom = {[15]}
    >
    </Map>
  );
}

export default MapComponent;
