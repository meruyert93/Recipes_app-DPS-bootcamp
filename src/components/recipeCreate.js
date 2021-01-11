import { React, useState } from 'react';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';



const recipeCreate = () => {

    return (
        <div className='root'>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper className='paper' elevation={3}>
                        <h3>Create your own recipe</h3>
                        <div>
                            <TextField
                                label="Enter name of your recipe" 
                                type="text"
                    
                            />
                            <TextField
                                label="Add the time needed" 
                                type="number"
                            />
                            <TextField
                                label="Add your ingredient one by one" 
                                type="text"
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default recipeCreate;
