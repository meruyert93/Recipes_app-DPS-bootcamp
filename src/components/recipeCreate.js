import  React   from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from './List'



function RecipeCreate ()  {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [description, setDescription] = useState('');

    const addMoreIngredient = () => {
        console.log('boo')
    }

    const addMoreDescription = () => {
        console.log('boo')
    }

    const submitButton = (e) => {
        e.preventDefault()
    }

    return (
        <div className='root'>
            <Grid container spacing={4}>
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
                                value={ingredient}
                                onChange={(e) => {setIngredient(e.target.value)}}
                            />
                            <AddCircleIcon onClick={addMoreIngredient}>
                            </AddCircleIcon>
                            <TextField
                                label="Add neccessary steps one by one" 
                                type="text"
                                fullWidth="true"
                                value={description}
                                onChange={(e) => {setDescription(e.target.value)}}
                            />
                            <AddCircleIcon onClick={addMoreDescription}>
                            </AddCircleIcon>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className='paper' elevation={3}>
                        <h3>Your magic recipe </h3>
                        <List name={name} time={time} ingredient={ingredient} description={description}/>
                        <button className="btn" OnClick={submitButton}>submit</button>
                    </Paper>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default RecipeCreate;
