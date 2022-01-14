// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Timeline, Radio} from 'antd';

function TimelimeLabelDemo() {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}>
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Solve initial network problems
        </Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
      </Timeline>
    </>
  );
}

/* ReactDOM.render(<TimelimeLabelDemo />, mountNode); */

TimelimeLabelDemo.propTypes = {
  /**
   * Define initial value for the Counter
   */
};

export default Timeline;
