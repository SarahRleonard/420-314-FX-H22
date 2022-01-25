import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'antd';

const Breadcrump = ({initialValue = 'Home'}) => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

Breadcrump.propTypes = {
  /**
   * Define initial name of the Home
   */
  initialValue: PropTypes.string.isRequired,
};

export default Breadcrump;
