import React, {useState, useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import classes from './SquareRange.module.css';

const SquareRange = () => {
    const [axis, setAxis] = useState(1)
    const [ordinate, setOrdinate] = useState(1)

    const X = () => {
        const x = document.getElementById("X").value
        setAxis(x)
    }
    const Y = () => {
        const y = document.getElementById("Y").value
        setOrdinate(y)
    }

    useEffect(() => {
        document.getElementById("square").style.width = `${axis}%`
        document.getElementById("square").style.height = `${ordinate}%`
        
    }, [X, Y])
    return (
        <>
            <div className={classes.containerSR}>
                <InputLabel>X</InputLabel>
                <input type="range" onChange={X} id="X" className={classes.x} size="small" defaultValue={axis} />
                <InputLabel>Y</InputLabel>
                <input type="range" onChange={Y} id="Y" className={classes.y} size="small" defaultValue={10} />
            </div>
            <div id="square" className={classes.squareBg}> </div>
        </>
    )
}

export default SquareRange;