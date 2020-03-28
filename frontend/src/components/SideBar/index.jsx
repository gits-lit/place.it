import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

import './style.less';
import BuildingCarousel from '../../containers/BuildingCarousel';

const SideBar = () => {
  return (
    <div className="map-side-bar">
      <h1>Create Your Building</h1>
      <BuildingCarousel />
      <div className="form-wrapper">
        <Form layout="vertical">
          <Form.Item label="Name of Building">
            <Input />
          </Form.Item>
          <div className="horizontal-items" spellcheck="false">
            <Form.Item label="Occupancy" className="half-input">
              <InputNumber size="large" />
            </Form.Item>
            <Form.Item label="Height" className="half-input">
              <InputNumber
                size="large"
                formatter={value => `${value}ft`}
                parser={value => value.replace('ft', '')}
              />
            </Form.Item>
          </div>
          <div className="horizontal-items">
            <div className="radius-wrapper">
              <Form.Item label="Radius" className="quarter-input">
                <InputNumber
                  size="large"
                  formatter={value => `${value}ft`}
                  parser={value => value.replace('ft', '')}
                />
              </Form.Item>
              <Form.Item label="⠀" className="quarter-input">
                <InputNumber
                  size="large"
                  formatter={value => `${value}ft`}
                  parser={value => value.replace('ft', '')}
                />
              </Form.Item>
            </div>
            <Form.Item label="Size" className="half-input">
              <InputNumber
                size="large"
                formatter={value => `${value}sqft`}
                parser={value => value.replace('sqft', '')}
              />
            </Form.Item>
          </div>
          <Button className="button">
            Calculate Score
          </Button>
        </Form>
        <p className="built">Built with ☕ at LA Hacks 2020</p>
      </div>
    </div>
  );
};

export default SideBar;
