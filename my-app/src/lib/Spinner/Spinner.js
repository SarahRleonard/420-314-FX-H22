import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';
import classes from './Spinner.module.css';

const spinner = () => <Spin/>;

spinner.propTypes = {
  /**
   * Define initial value for the Pagination page
   */
};

export default spinner;