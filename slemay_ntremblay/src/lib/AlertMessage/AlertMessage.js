import * as React from 'react';
import {Alert} from 'antd';
import PropTypes from 'prop-types';

const AlertMessage = ({message, type}) => (
  <Alert message={message} type={type} showIcon />
);

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

AlertMessage.defaultProps = {
  type: 'success',
};

export default AlertMessage;