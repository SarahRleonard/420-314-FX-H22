import React from 'react';
import {Counter} from 'components';
import classes from './App.module.css';

const App = () => (
  <div className={classes.container}>
    <Counter initialValue={0} />
  </div>
);

export default App;
