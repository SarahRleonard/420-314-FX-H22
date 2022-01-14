import * as React from 'react';
import PropTypes from 'prop-types';
import {Select} from 'antd';

const {Option} = Select;

const Selects = ({bordered}) => (
  <>
    <Select defaultValue="lucy" style={{width: 120}} bordered={bordered}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{width: 120}} disabled bordered={false}>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
);


Selects.propTypes = {
  /**
   * Define the number of pages you want
   */
  bordered: PropTypes.bool,
};

Selects.defaultProps = {
  bordered: 'true',
};

export default Selects;