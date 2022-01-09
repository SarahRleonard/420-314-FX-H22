import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CasinoIcon from '@mui/icons-material/Casino';
import classes from './Dice.module.css';

const Dice = () => {
  const [num, setNum] = useState();
  const [open, setOpen] = useState();

  const RollDice = () => {
    const res = 1 + Math.floor(Math.random() * 6);
    setNum(res);
    setOpen(true)
  };
  const handleDelete = () => {
    setOpen(false)
  };
  return (
    <>
      <Button onClick={RollDice} variant="outlined" startIcon={<CasinoIcon />}>
        Roll
      </Button>
      {open && <div className={classes.toast}>
        <Chip label={num} onDelete={handleDelete}/>
      </div>}
    </>
  );
};

export default Dice;
