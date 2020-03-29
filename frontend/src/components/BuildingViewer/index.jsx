import React from 'react';

import { Modal, Carousel } from 'antd';

import icon from '../../assets/icon.svg';
import './style.less';
import BuildingScreen from '../BuildingScreen';

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '0'
};

const BuildingViewer = props => {
  return (
    <Modal width={1100} visible={props.vis} onCancel={props.setVis}>
      <div className="building-viewer">
        <div className="header">
          <img src={icon} alt="icon" />
          <h1>
            <b>Buildings</b> | Viewer
          </h1>
        </div>
        <div className="col">
          <Carousel dotPosition="bottom" afterChange={props.onChange} {...settings}>
            {props.data.map((data) => {
              console.log(data.score);
              return (
                <div className="data" key={'data' + Math.random()}>
                  <BuildingScreen
                    title={data.name}
                    height={data.height}
                    length={data.length}
                    width={data.width}
                    color={data.color}
                    type={data.type}
                    score={data.score}
                    treeScore={data.treeScore}
                    transitScore={data.transitScore}
                    houseScore={data.houseScore}
                    crimeScore={data.crimeScore}
                    carbonScore={data.carbonScore}
                    lat={data.lat}
                    lng={data.lng}/>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Modal>
  );
};

export default BuildingViewer;
