import React from 'react';
import {CircularProgress} from "@material-ui/core";

 export function Spinner({...props}) {

    return (
        <CircularProgress />
      );
    };

    export function SpinnerColor({...props}) {

        return (
            
            <><CircularProgress color="secondary" /><CircularProgress color="success" /><CircularProgress color="inherit" /></>
          );
        };

export default Spinner;