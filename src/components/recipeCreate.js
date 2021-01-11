import  React   from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from './List'
import Alert from './Alert'



function RecipeCreate ()  {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredient, setIngredient] = useState([]);
    const [descriptionName, setDescriptionName] = useState('');
    const [description, setDescription] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg:'', type:''})

    const addMoreIngredient = () => {
        //console.log('boo')
        if  (!ingredientName) {
            showAlert(true, 'danger', 'Please enter value')
        }
        else if (ingredientName && isEditing) {
            setIngredient(ingredient.map((item) => {
                if (item.id === editID) {
                    return {...item, ingredientName: ingredientName}
                }
                return item
            })
            )
            setIngredientName('')
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changed')
        }
        else {
            //show alert
            //create new ITem
            showAlert(true, 'success', 'Item is added')
            const newItem = {id: new Date().getTime().toString(), ingredientName: ingredientName}
            setIngredient([...ingredient, newItem]);
            setIngredientName('');
        }
    }

    const showAlert = (show=false, type="", msg="" ) => {
        setAlert({show, type, msg})
    }

    const addMoreDescription = () => {
        //console.log('boo')
        if  (!descriptionName) {
            showAlert(true, 'danger', 'Please enter value')
        }
        else if (descriptionName && isEditing) {
            setDescription(description.map((item) => {
                if (item.id === editID) {
                    return {...item, descriptionName: descriptionName}
                }
                return item
            })
            )
            setDescriptionName('')
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changed')
        }
        else {
            showAlert(true, 'success', 'Item is added')
            const newItemStep = {id: new Date().getTime().toString(), descriptionName: descriptionName}
            setDescription([...description, newItemStep]);
            setDescriptionName('');
        }
            
    }

    const submitButton = (e) => {
        e.preventDefault();
        console.log('guu')
        
    }

    const clearList = () => {
        showAlert(true, 'danger', 'emptylist')
        setName('');
        setTime('');
        setIngredient([]);
        setDescription([]);
    }

    const removeIngredient = (id) => {
        showAlert(true, 'danger', 'item is removed')
        setIngredient(ingredient.filter((item) => item.id !== id ))
    }

    const removeDescription = (id) => {
        showAlert(true, 'danger', 'item is removed')
        setDescription(description.filter((item) => item.id !== id ))
    }


    const removeName = () => {
        showAlert(true, 'danger', 'item is removed')
        setName('')
    }


    const removeTime = () => {
        showAlert(true, 'danger', 'item is removed')
        setTime('')
    }

    const editIngredient = (id) => {
        const specificItem = ingredient.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setIngredientName(specificItem.ingredientName);
    }

    const editDescription = (id) => {
        const specificItem = description.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setDescriptionName(specificItem.descriptionName);
    }

    const editName = () => {
        setIsEditing(true);
        setName(name);
    }

    return (
        <div className='root'>
            <Grid container spacing={3}>
                <Grid item xs={12} clasName="alert-section">
                {alert.show && <Alert {...alert} removeAlert={showAlert} ingredient={ingredient} description={description}/>}
                </Grid>
                <Grid item xs={12}>
                    <Paper className='paper' elevation={3}>
                        <h3>Create your own recipe</h3>
                        <div className='textFields'>
                            <TextField
                                label="Enter name of your recipe" 
                                type="text"
                                fullWidth="true"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                    
                            />
                            <TextField
                                label="Add the time needed in minutes" 
                                type="number"
                                fullWidth="true"
                                value={time}
                                onChange={(e) => {setTime(e.target.value)}}
                            />
                            <TextField
                                label="Add your ingredient one by one" 
                                type="text"
                                fullWidth="true"
                                value={ingredientName}
                                onChange={(e) => {setIngredientName(e.target.value)}}
                            />
                            <AddCircleIcon onClick={addMoreIngredient}>
                            </AddCircleIcon>
                            <TextField
                                label="Add neccessary steps one by one" 
                                type="text"
                                fullWidth="true"
                                value={descriptionName}
                                onChange={(e) => {setDescriptionName(e.target.value)}}
                            />
                            <AddCircleIcon onClick={addMoreDescription}>
                            </AddCircleIcon>

                        </div>
                        <button className="btn" onClick={submitButton}>submit</button>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className='paper' elevation={3}>
                        <h3>Your magic recipe </h3>
                        <List 
                            name={name} 
                            time={time} 
                            ingredients={ingredient} 
                            descriptions={description} 
                            removeIngredient={removeIngredient} 
                            removeDescription={removeDescription} 
                            removeName={removeName} 
                            removeTime={removeTime}
                            editIngredient={editIngredient}
                            editDescription={editDescription}
                            editName={editName}
                            />
                        <button className="btn" onClick={clearList}>clear all</button>
                    </Paper>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default RecipeCreate;
