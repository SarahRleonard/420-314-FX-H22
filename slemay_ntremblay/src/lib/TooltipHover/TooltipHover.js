import * as React from 'react';
import {Tooltip} from 'antd';
import PropTypes from 'prop-types';

const TooltipHover = ({placement}) => (
  <Tooltip placement={placement} title="Prompt text">
    Tooltip will show on mouse enter.
  </Tooltip>
);

TooltipHover.propTypes = {
  placement: PropTypes.string.isRequired,
};

export default TooltipHover;