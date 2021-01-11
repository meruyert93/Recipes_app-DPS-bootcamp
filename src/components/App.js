import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  
import  recipeCreate from "./recipeCreate";
import  recipeGet from "./recipeGet";
import Container from '@material-ui/core/Container';
import '../App.css';

const App = () => {
    return (
        <Container maxWidth="lg">
            <Router>            
                <Switch>
                    <Route exact path="/"  component={recipeGet}/>
                    <Route path="/recipes/new" component={recipeCreate}/>
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
