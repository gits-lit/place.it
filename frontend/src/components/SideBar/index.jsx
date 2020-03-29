import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

import './style.less';
import BuildingCarousel from '../../containers/BuildingCarousel';

const SideBar = props => {
  return (
    <div className="map-side-bar">
      <h1>Create Your Building</h1>
      <BuildingCarousel />
      <div className="form-wrapper">
        <Form layout="vertical">
          <Form.Item label="Name of Building">
            <Input
              name="name"
              className="name"
              value={props.name}
              onChange={event => {
                props.setValue('name', event.target.value);
              }}
              onBlur={event => {
                props.setValue('name', event.target.value);
              }}
            />
          </Form.Item>
          <div className="horizontal-items" spellCheck="false">
            <Form.Item label="Occupancy" className="half-input">
              <InputNumber
                size="large"
                onChange={value => {
                  props.setValue('occupancy', value);
                }}
                onBlue={value => {
                  props.setValue('occupancy', value);
                }}
              />
            </Form.Item>
            <Form.Item label="Height" className="half-input">
              <InputNumber
                size="large"
                formatter={value => `${value}ft`}
                parser={value => value.replace('ft', '')}
                onChange={value => {
                  props.setValue('height', value);
                }}
                onBlue={value => {
                  props.setValue('height', value);
                }}
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
                  onChange={value => {
                    props.setValue('length', value);
                  }}
                  onBlue={value => {
                    props.setValue('length', value);
                  }}
                />
              </Form.Item>
              <Form.Item label="⠀" className="quarter-input">
                <InputNumber
                  size="large"
                  formatter={value => `${value}ft`}
                  parser={value => value.replace('ft', '')}
                  onChange={value => {
                    props.setValue('width', value);
                  }}
                  onBlue={value => {
                    props.setValue('width', value);
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item label="Size" className="half-input">
              <InputNumber
                size="large"
                formatter={value => `${value}sqft`}
                parser={value => value.replace('sqft', '')}
                onChange={value => {
                  props.setValue('size', value);
                }}
                onBlue={value => {
                  props.setValue('size', value);
                }}
              />
            </Form.Item>
          </div>
          <div className="horizontal-items">
            <Button className="button" onClick={props.calculateScore}>
              Calculate Score
            </Button>
            <Button className="button-2" onClick={props.clearBuildings}>
              Clear Buildings
            </Button>
          </div>
        </Form>
        <p className="built">Built with ☕ at LA Hacks 2020</p>
      </div>
    </div>
  );
};

export default SideBar;
