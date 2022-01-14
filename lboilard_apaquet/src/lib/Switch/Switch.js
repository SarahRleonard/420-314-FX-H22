import React from 'react';
import {PropTypes} from 'prop-types';
import 'antd/dist/antd.css';
import './Switch.module.css';
import {Switch} from 'antd';

export function Switchs({size}) {
  return (
    <>
    <Switch size={size} defaultChecked />
    </>
    );
  };

Switchs.propTypes = {
  /**
   * Define the size 
   */
   size: PropTypes.oneOf(['small', 'large']),
};

Switchs.defaultProps = {
  size: 'small',
};

export default Switchs