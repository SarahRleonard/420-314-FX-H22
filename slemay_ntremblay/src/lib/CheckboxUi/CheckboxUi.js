import * as React from 'react';
import {Checkbox} from 'antd';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const CheckboxUi = ({text, textColor}) => (
  <Checkbox className={textColor}>{text}</Checkbox>
);

CheckboxUi.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default CheckboxUi;