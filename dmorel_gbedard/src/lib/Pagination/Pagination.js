import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';
import classes from './Pagination.module.css';

const pagination = () => <Pagination defaultCurrent={1} total={50} />;

pagination.propTypes = {
  /**
   * Define initial value for the Pagination page
   */
};

export default pagination;
