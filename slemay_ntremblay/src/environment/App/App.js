import React from 'react';
import {Popover} from 'lib';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Popover placement="bottom" title="Bienvenue" trigger="hover" />
  </div>
);

export default App;
