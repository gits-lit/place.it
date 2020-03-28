import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import wavy_left2 from '../../assets/wavy_left2.png';
import wavy_right2 from '../../assets/wavy_right2.svg';

import './style.less';

const SignUp = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/map');
  }

  return (
    <>
      <nav className="home-nav-bar">
        <NavLink to="/">
          <p>about us</p>
        </NavLink>
        <NavLink to="/">
          <p>blog</p>
        </NavLink>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/">
          <p>contact us</p>
        </NavLink>
        <NavLink to="/">
          <p className="button">Log In</p>
        </NavLink>
      </nav>
      <div className="signup-page">
        <div className="signup-card">
          <div className="text-wrapper">
            <h1>Sign Up</h1>
            <Form layout="vertical">
              <Form.Item label="Name (First and Last)">
                <Input />
              </Form.Item>
              <Form.Item label="Email Address">
                <Input />
              </Form.Item>
              <Form.Item label="Organization">
                <Input />
              </Form.Item>
              <Form.Item label="Address">
                <Input />
              </Form.Item>
            </Form>
            <div style={{ display: 'flex', marginTop: '35px' }}>
              <Checkbox />
              <p>
                Do you accept the <b>terms and services?</b>
              </p>
            </div>
            <div className="button-wrapper">
              <Button onClick={handleClick} block={true} size="large">
                Register Now
              </Button>
            </div>
          </div>
        </div>
        <img className="wLeft2" src={wavy_left2} alt="maps" />
        <img className="wRight2" src={wavy_right2} alt="maps" />
      </div>
    </>
  );
};

export default SignUp;
