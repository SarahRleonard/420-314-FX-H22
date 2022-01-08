import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import classes from './Button.module.css';

const button = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

button.propTypes = {
  /**
   * Here you can use propTypes to define properties and modify them
   */
};

export default button;
