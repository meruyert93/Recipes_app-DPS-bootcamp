import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'   
import * as RecipeCreate from "./recipeCreate";
import './App.css';

const App = () => {
    return (
        <div>
            <Router>            
                <Switch>
                    <Route exact path="/" />
                    <Route path="/recipes/new" component={RecipesCreate}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
