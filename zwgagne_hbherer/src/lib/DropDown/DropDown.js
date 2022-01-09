import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconArrowDown from './Icons/fi-rs-angle-small-down.svg';
import classes from './DropDown.module.css';

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setOpen(!open)} variant="contained">
            <img src={IconArrowDown} alt="Arrow down" />
        </Button>
        {open && <div>
            <ul className={classes.DropSection}>
              <li className={classes.Li}><a className={classes.LinkA} href={props.Link1}>{props.Name1}</a></li>
              <li className={classes.Li}><a className={classes.LinkA} href={props.Link2}>{props.Name2}</a></li>
              <li className={classes.Li}><a className={classes.LinkA} href={props.Link3}>{props.Name3}</a></li>
              <li className={classes.Li}><a className={classes.LinkA} href={props.Link4}>{props.Name4}</a></li>
            </ul>
          </div>}
      </div>
    </>
  );
};

DropDown.propTypes = {
    /**
     * Define initial value for the Counter
     */
    Name1: PropTypes.string.isRequired,
    Name2: PropTypes.string.isRequired,
    Name3: PropTypes.string.isRequired,
    Name4: PropTypes.string.isRequired,

    Link1: PropTypes.string.isRequired,
    Link2: PropTypes.string.isRequired,
    Link3: PropTypes.string.isRequired,
    Link4: PropTypes.string.isRequired,
  };

export default DropDown;
