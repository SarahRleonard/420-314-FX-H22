import React from 'react';
import PropTypes from 'prop-types';
import {Button, notification} from 'antd';
import classes from './Notification.module.css';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const Notification = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);

Notification.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month.quarter,year)
   */
};

export default Notification;
