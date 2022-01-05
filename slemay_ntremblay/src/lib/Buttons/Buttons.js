import * as React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const Buttons = ({size, type}) => (
  <Button type={type} size={size}>
    {type}-{size}
  </Button>
);

Buttons.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Buttons;
