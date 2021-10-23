import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/forms/Login'
import Register from './components/forms/Register'

import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">Home</a>
        <a href="/register">Sign Up</a>
        <a href="/login">Login</a>
        <a href="#">Logout</a>
      </nav>
      <HomePage />
      
      <Switch>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
        
      </Switch>
      


    </div>
  );
}

export default App;
