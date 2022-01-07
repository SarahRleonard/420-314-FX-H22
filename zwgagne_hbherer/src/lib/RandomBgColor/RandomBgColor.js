import React, {useState} from 'react';
import Button from '@mui/material/Button';
import classes from './RandomBgColor.module.css';

const RandomBgColor = () => {
    const [color, setColor] = useState("ffffff")
    const GenerateRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = `#${randomColor}`
        setColor(randomColor)
    }
    return (
        <>
            <Button onClick={GenerateRandomColor} variant="contained">Random Color</Button>
            <div className={classes.container}>
                <p>Back ground color is : <b> #{color}</b></p>
            </div>
        </>
    )
}

export default RandomBgColor;