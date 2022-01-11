import React, { useState } from 'react';
import Rating from '@mui/material/Rating';


/**
 * Basic 5-star product rating display
 */

export const BasicRating = ({...props}) => {
  const [value, setValue] = useState(2);

  return (
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        {...props}
      />
  );
}

