import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { scoreToGrade } from '../../utils';
import * as THREE from "three";

import './style.less';
import buildingTypes from '../../assets/building-types.json';

import Statistic from '../Statistic';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.01))

  const width = (props.width / props.length) * 150;
  const height = (props.height / props.length) * 150;

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[.01, .01, .01]}>
      <boxBufferGeometry attach="geometry" args={[150, height, width]} />
      <meshStandardMaterial attach="material" color={props.color} />
    </mesh>
  )
}


const BuildingScreen = props => {
  return (
    <div className="building-screen">
      <h1>{props.title}</h1>
      <p>Lat: {props.lat.toFixed(2)} Lng: {props.lng.toFixed(2)}</p>
      <div className="row">
        <Statistic
          title="Tree Grade"
          stats={scoreToGrade(props.treeScore)}
          color={props.treeScore > 2.7}
          description={props.treeScore > 2.7 ? "#teamtrees" : "Please plant more trees."}
          />
        <Statistic
          title="Carbon Grade"
          stats={scoreToGrade(props.carbonScore)}
          description={props.carbonScore > 2.7 ? "Your carbon emissions look great!" : "Mother Nature is crying."}
          color={props.carbonScore > 2.7}
          />
        <Statistic
          title="Transit Grade"
          stats={scoreToGrade(props.transitScore)}
          description={props.transitScore > 2.7 ? "Transit looks good!" : "Transit needs improvement."}
          color={props.transitScore > 2.7}
          />
      </div>
      <div className="row">
        <Statistic
          title="Parking Grade"
          stats={scoreToGrade(props.parkingScore)}
          description={props.transitGrade > 2.7 ? "Enough parking, by LA standards." : "Definitely needs more space."}
          color={props.parkingScore > 2.7}
          />
        <Statistic
          title="Crime Grade"
          stats={scoreToGrade(props.crimeScore)}
          description={props.crimeScore > 2.7 ?  "Seems safe to me!" : "Yikes, this isn't a safe area."}
          color={props.crimeScore > 2.7}
          />
        <Statistic
          title="Housing Grade"
          stats={scoreToGrade(props.houseScore)}
          color={props.houseScore > 2.7}
          description={props.housingScore > 2.7 ?  "Well valued!" :"Not much money to be made here."}
          />
      </div>
      <div className="overall">
        <img src={require(`../../assets/${buildingTypes[props.type].image}`)}/>
        <div className="score" style={{
            color:  `${props.score >= 2.7 ? '#72D66A' : '#E76070'}`
          }}>
          <b>{scoreToGrade(props.score)}</b>
          <p>overall score</p>
        </div>
      </div>
      <div className="model">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]}/>
          <Box
            position={[0, 0, 0]}
            height={props.height}
            width={props.width}
            length={props.length}
            color={props.color}/>
        </Canvas>
      </div>
    </div>
  );
};

export default BuildingScreen;
