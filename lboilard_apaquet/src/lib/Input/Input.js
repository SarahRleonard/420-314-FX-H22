import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Inputs = ({size}) => (
  <>
  <Input size={size} placeholder="size" prefix={<UserOutlined />} />
  </>
);

Inputs.propTypes = {
  /**
   * Define the size 
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Inputs.defaultProps = {
  size: 'large',
};

export default Inputs