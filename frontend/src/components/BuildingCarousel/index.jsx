import React, { useState } from 'react';
import { Button, Carousel } from 'antd';

import './style.less';

const settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  slidesToShow: 1.5,
  centerPadding: '15vw'
};

const BuildingCarousel = (props) => {
  return (
    <div className="building-carousel">
      <Carousel dotPosition="bottom" afterChange={props.onChange} {...settings}>
        <h1>hi1</h1>
        <h1>hi2</h1>
        <h1>hi3</h1>
      </Carousel>
    </div>
  );
};

export default BuildingCarousel;
