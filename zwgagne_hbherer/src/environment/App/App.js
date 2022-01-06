import React from 'react';
import Time from '../../lib/Time/Time';
import Counter from '../../lib/Counter/Counter';
import DropDown from '../../lib/DropDown/DropDown';
import classes from './App.module.css';

const App = () => (
  <>
    <div className={classes.container}>
      <Counter initialValue={0} />
    </div>
    <div className={classes.container}>
      <DropDown 
      Name1='Mon profil' Link1='/profil'
      Name2='Accueil' Link2='/'
      Name3='Mon inventaire' Link3='/inventory'
      Name4='Favories' Link4='/fav'
      />
    </div>
    <div className={classes.containerLeft}>
      <Time />
    </div>
  </>
);

export default App;
