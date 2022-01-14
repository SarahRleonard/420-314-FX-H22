import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Space} from 'antd';

const {RangePicker} = DatePicker;

function onChange(value, dateString) {
  // eslint-disable-next-line no-console
  console.log('Selected Time: ', value);
  // eslint-disable-next-line no-console
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  // eslint-disable-next-line no-console
  console.log('onOk: ', value);
}

const Datepicker = ({picker}) => (
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} picker={picker} />{' '}
    <RangePicker
      showTime={{format: 'HH:mm'}}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />{' '}
  </Space>
);

Datepicker.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month,quarter,year)
   */
  picker: PropTypes.string.isRequired,
};

export default Datepicker;
