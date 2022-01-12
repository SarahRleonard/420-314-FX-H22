import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Space} from 'antd';
import classes from "./Datepicker.module.css";


const {RangePicker} = DatePicker;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  function onOK(value){
    console.log('onOK: ', value);
  }

const Datepicker = ({initialValue = 0}) => {

    return (
        <Space direction="vertical" size={12}>
        <DatePicker ShowTime onChange={onChange} onOK = {onOK}/>
        <RangePicker
        showTime={{format:"HH:mm"}}
        format="YYY-MM-DD HH:mm"
        onChange={onChange}
        onOK={onOK}
        />
      </Space>
    );
  };


Datepicker.propTypes = {
    /**
     * Define initial value for the Datepicker
     */
     initialValue: PropTypes.string.isRequired,
  };
  
  export default Datepicker;