import * as React from 'react';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

const PaginationCount = ({total, defaultCurrent}) => (
  <Pagination total={total} defaultCurrent={defaultCurrent}/>
);

PaginationCount.propTypes = {
  total: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
};

export default PaginationCount;