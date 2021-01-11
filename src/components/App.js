import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  
import  recipeCreate from "./recipeCreate";
import  recipeGet from "./recipeGet";
import '../App.css';

const App = () => {
    return (
        <div>
            <Router>            
                <Switch>
                    <Route exact path="/"  component={recipeGet}/>
                    <Route path="/recipes/new" component={recipeCreate}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
