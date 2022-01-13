import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

/**
 * Pagination UI to help navigation
 */


export const PageNumber = ({size}) => {
  return(
    <Pagination 
      defaultCurrent={1} 
      total={50} 
      size={size}
    />
  )
}

PageNumber.propTypes = {
  /**
   * Change menu mode from inline to vertical
   */
  size: PropTypes.oneOf(['default', 'small']),
};
