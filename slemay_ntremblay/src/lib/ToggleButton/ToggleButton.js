import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';



const theme = createTheme({
  components: {
    // Name of the component
    ToggleButtonGroup: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
});


const ToggleButtons = ({size}) => {

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        theme={theme}
        size={size}
        exclusive
        value={alignment}
        onChange={handleAlignment}
        aria-label="text alignment">
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

ToggleButtons.propTypes = {
  /**
   * Define size of the ToggleButtonGroup.
   */
  size: PropTypes.string.isRequired,
};

export default ToggleButtons;
