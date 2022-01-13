import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


/**
 * Basic button for user interaction
 */
export const BasicButton = ({variant, label, size}) => {
  return (
      <Button 
        variant={variant}
        size={size}>
          {label}
      </Button>
  );
}

BasicButton.propTypes = {
  /**
  * Button content
  */
  label: PropTypes.string,
  /**
   * Change button size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
  * Change button style
  */
  variant: PropTypes.oneOf(['contained', 'outlined']),

};
