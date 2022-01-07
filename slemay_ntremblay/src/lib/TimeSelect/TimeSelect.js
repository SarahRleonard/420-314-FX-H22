import * as React from 'react';
import {TimePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

const TimeSelect = ({size}) => (
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size={size} />
);

TimeSelect.propTypes = {
  size: PropTypes.string,
};

TimeSelect.defaultProps = {
  size: 'small',
};

export default TimeSelect;