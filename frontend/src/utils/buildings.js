import { MercatorCoordinate } from 'mapbox-gl';
import * as THREE from 'three';
import { TweenMax } from 'gsap';

export const placeBuilding = (map, lng, lat) => {

  // parameters to ensure the model is georeferenced correctly on the map
  var modelOrigin = [lng, lat];
  var modelAltitude = 0;
  var modelRotate = [Math.PI / 2, - Math.PI / 4 + 0.1, 0];

  var modelAsMercatorCoordinate = MercatorCoordinate.fromLngLat(
    modelOrigin,
    modelAltitude
  );

  var modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    /* Since our 3D model is in real world meters, a scale transform needs to be
    * applied since the CustomLayerInterface expects units in MercatorCoordinates.
    */
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  };

  var customLayer = {
    id: 'building',
    type: 'custom',
    renderingMode: '3d',
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    onAdd: function(map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    var directionalLight = new THREE.DirectionalLight(0xeeeeee);
    directionalLight.position.set(40, -70, 100).normalize();
    this.scene.add(directionalLight);

    var directionalLight2 = new THREE.DirectionalLight(0xeeeeee);
    directionalLight2.position.set(40, 70, 100).normalize();
    this.scene.add(directionalLight2);

    var geometry = new THREE.BoxGeometry( 40, 0.2, 40 );
    var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
    var cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    TweenMax.to(cube.scale, 1, { x: 1, y: 400, z: 1 });
    TweenMax.from(cube.position, 1,  {y: -40});
    this.map = map;

    // use the Mapbox GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
    canvas: map.getCanvas(),
    context: gl,
    antialias: true
    });

    this.renderer.autoClear = false;
    },
    render: function(gl, matrix) {
    var rotationX = new THREE.Matrix4().makeRotationAxis(
    new THREE.Vector3(1, 0, 0),
    modelTransform.rotateX
    );
    var rotationY = new THREE.Matrix4().makeRotationAxis(
    new THREE.Vector3(0, 1, 0),
    modelTransform.rotateY
    );
    var rotationZ = new THREE.Matrix4().makeRotationAxis(
    new THREE.Vector3(0, 0, 1),
    modelTransform.rotateZ
    );

    var m = new THREE.Matrix4().fromArray(matrix);
    var l = new THREE.Matrix4()
    .makeTranslation(
    modelTransform.translateX,
    modelTransform.translateY - 0.0000002,
    modelTransform.translateZ + 0.0000012
    )
    .scale(
    new THREE.Vector3(
    modelTransform.scale,
    -modelTransform.scale,
    modelTransform.scale
    )
    )
    .multiply(rotationX)
    .multiply(rotationY)
    .multiply(rotationZ);

    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.state.reset();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  }
  };

  map.removeLayer('building');
  map.addLayer(customLayer, 'waterway-label');
}

export const loadBuildings = (map) => {
  map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': {
              'type': 'identity',
              'property': 'height'
          },
          'fill-extrusion-base': {
              'type': 'identity',
              'property': 'min_height'
          },
          'fill-extrusion-opacity': .5
      }
  });
}
