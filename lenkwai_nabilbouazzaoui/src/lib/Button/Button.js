import React from 'react';
import PropTypes from 'prop-types';


const button = () => {
 
    return (
      <h1>Primary Button</h1>
    );
  };

button.propTypes = {
    /**
     * Define initial value for the button
     */
    initialValue: PropTypes.string.isRequired,
  };
  
  export default button;
  