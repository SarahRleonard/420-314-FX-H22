import React, {useState} from 'react';
import {Modal, Button} from 'antd';

const ModalSarah = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <p>Total cost of ...</p>
        <p>some contents...</p>
        <p>Do you agree to the termes and conditions</p>
      </Modal>
    </>
  );
};

/* ReactDOM.render(<App />, mountNode); */
ModalSarah.propTypes = {
  /**
   * Define initial value for the Counter
   */
};

export default ModalSarah;
