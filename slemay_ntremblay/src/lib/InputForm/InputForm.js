import * as React from 'react';
import {Input} from 'antd';
import PropTypes from 'prop-types';

const TimeSelect = ({size, placeholder}) => (
  <Input size={size} placeholder={placeholder} />
);

TimeSelect.propTypes = {
  size: PropTypes.oneOf(['large', '', 'small']),
  placeholder: PropTypes.string.isRequired,
};

TimeSelect.defaultProps = {
  size: '',
};

export default TimeSelect;