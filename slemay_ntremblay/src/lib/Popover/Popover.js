import * as React from 'react';
import {Button, Popover} from 'antd';
import PropTypes from 'prop-types';



const Pop = ({placement, title, trigger}) => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <Popover
      content={content}
      title={title}
      placement={placement}
      trigger={trigger}>
      <Button type="primary">{trigger}</Button>
    </Popover>
  )
};

Pop.propTypes = {
  placement: PropTypes.oneOf(['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', "bottomRight"]).isRequired,
  title: PropTypes.string.isRequired,
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']).isRequired,
};

export default Pop;
