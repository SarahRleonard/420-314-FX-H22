import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const Menuderoulant = () => {
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <Dropdown overlay={menu} />;
};

Menuderoulant.propTypes = {
  /**
   * Define initial values for the Dropdown menu
   */
  dropdown: PropTypes.string.isRequired,
};

export default Menuderoulant;
