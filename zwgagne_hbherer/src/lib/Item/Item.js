import React, {useState} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import classes from './Item.module.css';

const Item = (props) => {
    const [done , setDone] = useState()

    const test = () => {
        setDone(!done)
    }

    return (
        <>
            <FormControlLabel onClick={() => setDone(!done)} control={<Checkbox color="success"/>} label={!done ? <span onClickCapture={() => setDone(!done)}>{props.text}</span> : <span onClickCapture={() => setDone(!done)} className={classes.Done}>{props.text}</span>} />
        </>
    )
}

Item.propTypes = {
    /**
     * Define initial value for the Item
     */
    text: PropTypes.string.isRequired,
  };

export default Item;