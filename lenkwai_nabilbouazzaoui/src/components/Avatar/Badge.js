import React from "react";
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

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