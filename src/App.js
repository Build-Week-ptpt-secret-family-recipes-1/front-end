import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/forms/LoginForm';
import Register from './components/forms/RegisterForm';
import EditRecipeForm from './components/recipe components/EditRecipe';
import Recipe from './components/recipe components/Recipe';
import AddRecipe from './components/forms/AddRecipeForm';
import RecipeList from './components/RecipeList';
import NavBar from './components/NavBar';
import PrivateRoute from './utils/PrivateRoute'

import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <nav>
        <a href="#">Home</a>
        <a href="/register">Sign Up</a>
        <a href="/login">Login</a>
        <a href="#">Logout</a>
      </nav> */}
      <HomePage />
      
      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path={`/users/${window.localStorage.getItem('userId')}/recipes/add`}>
          <AddRecipe />
        </PrivateRoute>

        <PrivateRoute path={`/users/${window.localStorage.getItem('userId')}/recipes`}>
          <RecipeList />
        </PrivateRoute>

        <PrivateRoute path='/recipes/edit/:id'>
          <EditRecipeForm />
        </PrivateRoute>
        
      </Switch>
      


    </div>
  );
}

export default App;
