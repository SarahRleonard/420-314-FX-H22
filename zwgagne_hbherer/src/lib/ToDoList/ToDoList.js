import React, {useState, useEffect} from "react";
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Item from "../Item/Item";
import classes from './ToDoList.module.css';

const ToDoList = () => {
    const tab = []
    const [itemList, setItemList] = useState([]);
    
    const AddItem = () => {
        const addedItem = document.getElementById('inputAddItem').value
        setItemList(itemList.concat(addedItem))
    }

    const resetList = () => {
        setItemList([])
    }
    useEffect(() => {
        document.getElementById('inputAddItem').value = ''
        document.getElementById('inputAddItem').focus()
    }, [AddItem])

    return (
        <>
            <div  className={classes.mainContainer}>
                <FormGroup>
                    <InputLabel>Add item list</InputLabel>
                    <Input placeholder="Type text here" className={classes.btn} id="inputAddItem" name="NewItem" type="text" />
                    <Button type="button" onClick={AddItem} variant="contained">Add</Button>
                </FormGroup>
                <FormGroup className={classes.ContainerToDo}>
                    <h3>To Do List</h3>
                    {itemList.map((itemsL) => (
                        <Item text={itemsL} key={itemsL}/>
                    ))}
                    <Button type="button" onClick={resetList}>Reset</Button>
                </FormGroup>
            </div>
        </>
    )
}

export default ToDoList;