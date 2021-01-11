import { React, useState } from 'react';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';



const recipeCreate = () => {
    const addMoreInput = () => {
        
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
                    
                            />
                            <TextField
                                label="Add the time needed" 
                                type="number"
                                fullWidth="true"
                                
                            />
                            <TextField
                                label="Add your ingredient one by one" 
                                type="number"
                                fullWidth="true"
                            />
                            <AddCircleIcon>
                                <IconButton onClick={}/>
                            </AddCircleIcon>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default recipeCreate;
