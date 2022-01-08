import React, {useState} from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const Convert = () => {
    const [feet, setFeet] = useState()
    const [meter, setMeter] = useState()

    const ConvertionLengthFeet = () => {
        const Feet = document.getElementById('Feet').value
        setFeet()
        setMeter(Feet / 3.2808)
    }
    const ConvertionLengthMeter = () => {
        const Meter = document.getElementById('Meter').value
        setMeter()
        setFeet(Meter * 3.2808)
    }
    const reset = () => {
        setFeet()
        setMeter()
    }

    return (
        <>
            <form>
                <div>
                    <InputLabel>Pied</InputLabel>
                    <Input id="Feet" name="feet" type="number" value={feet} onChange={ConvertionLengthFeet} />
                </div>
                <div>
                    <InputLabel>Mètre</InputLabel>
                    <Input id="Meter" name="meter" type="number" value={meter} onChange={ConvertionLengthMeter} />
                </div>
                    <Button onClick={reset} type="reset">Reset</Button>
            </form>
        </>
    )
}

export default Convert;