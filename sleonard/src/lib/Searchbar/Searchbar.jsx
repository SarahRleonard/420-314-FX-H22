import React from 'react';
import PropTypes from 'prop-types';
import {Input, Space} from 'antd';
import {AudioOutlined} from '@ant-design/icons';

const {Search} = Input; /* Renomme le Input en Search */
// eslint-disable-next-line no-console
const onSearch = value => console.log(value);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const Searchbar = ({initialValue}) => {
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      suffix={suffix}
      enterButton
      value={initialValue}
    />{' '}
  </Space>;
};

Searchbar.propTypes = {
  /**
   * Define initial value in the searchbar for the  placeholder
   */
  initialValue: PropTypes.string.isRequired,
};

export default Searchbar;
