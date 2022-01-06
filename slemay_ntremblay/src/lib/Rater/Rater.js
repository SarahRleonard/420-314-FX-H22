import * as React from 'react';
import {useState} from 'react';
import {Rate} from 'antd';
import PropTypes from 'prop-types';

const Rater = ({star}) => {
  const [value, setValue] = useState(star);

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <span>
      <Rate
        tooltips={desc}
        onChange={() => {
          handleChange(value);
        }}
        value={value}
      />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};

Rater.propTypes = {
  star: PropTypes.number.isRequired,
};

export default Rater;
