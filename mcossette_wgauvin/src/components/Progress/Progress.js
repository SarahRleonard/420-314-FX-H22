import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';

/**
 * Progress bar for multi-steps process on the website
 */
 export const ProgressBar = ({percent, type}) => {
  return(
    <Progress percent={percent} type={type} />
  );
};

ProgressBar.propTypes = {
  /**
   * Percent
   */
  percent: PropTypes.oneOf(['0', '25', '50', '75', '100']),
  /**
   * Circular
   */
  type: PropTypes.oneOf(['circle']),
  };



