import * as React from 'react';
import {Progress} from 'antd';
import PropTypes from 'prop-types';

const ProgressBar = ({percent}) => (
  <Progress percent={percent} />
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
