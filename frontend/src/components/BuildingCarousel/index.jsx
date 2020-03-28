import React, { useState } from 'react';
import { Button, Carousel } from 'antd';

import './style.less';

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: '0'
};

const BuildingCarousel = (props) => {
  return (
    <div className="building-carousel">
      <Carousel dotPosition="bottom" afterChange={props.onChange} {...settings}>
        {props.buildings.map((building) => {
          return (
            <div className="building" key={'building' + building[0]}>
              <div className="image">
                <img src={require(`../../assets/${building[1].image}`)} alt={building[0]} />
              </div>
              <p>{building[0]}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BuildingCarousel;
