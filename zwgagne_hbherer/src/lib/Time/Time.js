import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import classes from './Time.module.css';

const Time = () => {
    const [date, setDate] = useState("")
    const [open, setOpen] = useState();
  
    function LiveTime() {
        setDate(new Date().toLocaleString())
        setOpen(!open)
  }

  return (
    <>
      <IconButton onClick={() => LiveTime()} color="secondary" aria-label="Time">
        <AlarmIcon />
      </IconButton>
      {open && <div className={classes.DropSection}>{date}</div>}
    </>
  );
};

export default Time;
