import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

/**
 * Alert component for user interaction
 */
export const BasicAlerts = ({ severity, title, content, variant }) => {
  return (
    <Alert
      severity={severity}
      variant={variant}
      onClose={() => { }}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};

BasicAlerts.propTypes = {
  /**
   * Alert severity
   */
  severity: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
  /**
   * Alert title 
  */
  title: PropTypes.string.isRequired,
  /**
   * Alert content
   */
  content: PropTypes.string.isRequired,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['filled', 'outlined'])
};





