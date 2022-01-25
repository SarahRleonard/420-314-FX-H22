import React, {useState} from 'react';
import {Drawer, Button} from 'antd';

const Sidedrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}>
        <p>Items purchased</p>
        <p>Articles saved</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

/* ReactDOM.render(<App />, mountNode); */

Sidedrawer.propTypes = {
  /**
   * Define what you want to display in the side drawer
   */
};

export default Sidedrawer;
