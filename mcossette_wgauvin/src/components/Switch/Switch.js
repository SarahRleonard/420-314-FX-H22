import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

/**
 * Switch for boolean options on products
 */
export const BasicSwitch = ({label, ...props}) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label={label} {...props}/>
    </FormGroup>
  );
}

BasicSwitch.propTypes = {
  /**
  * Switch label
  */
  label: PropTypes.string,
};
