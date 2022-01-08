import React from 'react';
import PropTypes from 'prop-types';
import {Result, Button} from 'antd';
import classes from './Error404.module.css';

const error404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);

error404.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month.quarter,year)
   */
};

export default error404;
