import * as React from 'react';
import {useState} from 'react';
import {Switch} from 'antd';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const Switcher = ({size}) => (
  <Switch
    size={size}
    checkedChildren={<CheckOutlined />}
    unCheckedChildren={<CloseOutlined />}
    defaultChecked
  />
);

Switcher.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Switcher;
