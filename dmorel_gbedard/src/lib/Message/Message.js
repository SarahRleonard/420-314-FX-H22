import React from 'react';
import PropTypes from 'prop-types';
import {message, Button, Space} from 'antd';
import classes from './Message.module.css';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const Message = () => (
  <Space>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
);

Message.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month.quarter,year)
   */
};

export default Message;
