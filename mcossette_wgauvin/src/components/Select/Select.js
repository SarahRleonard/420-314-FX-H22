import React, { useState } from 'react';
import PropTypes from 'prop-types';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


/**
 * Labeled select field for product customization
 */

export const SelectLabels = ({label, variant}) => {
  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <FormControl variant={variant} sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value='1'>Option 1</MenuItem>
        <MenuItem value='2'>Option 2</MenuItem>
        <MenuItem value='3'>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}

SelectLabels.propTypes = {
  /**
  * Switch label
  */
  label: PropTypes.string,
};