import React from "react";
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const fontSize = 14, // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16,
const coef = fontSize / 14;

const theme = createMuiTheme({
  typography: {
    pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
  },
});
export function Badge(...props){
    return(
        <Avatar><PersonIcon /></Avatar>
    );
};

export function BadgeInitial(...props){
    return(
        <Avatar>H</Avatar>
    );
};

export default Badge;