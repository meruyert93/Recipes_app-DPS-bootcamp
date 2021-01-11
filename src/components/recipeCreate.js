import { React, useState } from 'react';

import { TextField } from '@material-ui/core';


const recipeCreate = () => {
    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
        </form>
    )
}

export default recipeCreate;
