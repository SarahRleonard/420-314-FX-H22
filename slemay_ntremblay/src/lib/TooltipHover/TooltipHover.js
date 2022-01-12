import * as React from 'react';
import {Tooltip} from 'antd';
import PropTypes from 'prop-types';

const TooltipHover = ({placement, title, text}) => (
  <Tooltip placement={placement} title={title}>
    {text}
  </Tooltip>
);

TooltipHover.propTypes = {
  placement: PropTypes.oneOf(['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TooltipHover;