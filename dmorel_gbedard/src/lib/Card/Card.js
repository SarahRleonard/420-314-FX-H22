import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import classes from './Card.module.css';

const card = () => (
  <>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{width: 300}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{width: 300}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>
);

card.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month.quarter,year)
   */
};

export default card;
