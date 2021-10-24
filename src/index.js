import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './utils/reducers'
import HomePage from './components/HomePage';
import AddRecipe from './components/recipe components/AddRecipe';
import Registration from './components/Registration';
import Login from './components/Login';
import Recipe from './components/recipe components/Recipe';
import EditRecipe from './components/recipe components/EditRecipe';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))
);

//not sure if add recipe endpoint will work, added for display of logic

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
        <PrivateRoute path='/recipes/view/:id' component={Recipe} />
        <PrivateRoute path='/recipes/edit/:id' component={EditRecipe} />
        <PrivateRoute path='/add-recipe' component={AddRecipe} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
