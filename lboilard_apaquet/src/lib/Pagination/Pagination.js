import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

const PaginaTion = ({total}) => (
  <Pagination defaultCurrent={1} total={total} />
);

PaginaTion.propTypes = {
  /**
   * Define the number of pages you want
   */
  total: PropTypes.number,
};

PaginaTion.defaultProps = {
  total: 50,
};

export default PaginaTion