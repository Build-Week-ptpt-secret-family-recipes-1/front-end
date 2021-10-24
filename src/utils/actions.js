import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = (credentials, history) => dispatch => {
  // const userCred = {
  //   email: credentials.email,
  //   password: credentials.password,
  //   first_name: credentials.first_name,
  //   last_name: credentials.last_name
  // }

  dispatch({ type: REGISTER_START });
  axios
    .post(
      "https://ptptsecretfamilyrecipes1.herokuapp.com/api/auth/register",
      credentials
    )
    .then(res => {
      console.log(res)
      dispatch({ type: REGISTER_SUCCESS });
      if (res.token) {
        localStorage.setItem("token", res.token);
        history.push(`/users/${res.userId}/recipes`);
      } else {
        credentials.history.push('/login');
      }
      // return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
      // return false;
    });
};

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const logIn = (credentials, history) => dispatch => {
    dispatch({ type: LOG_IN_START });
    axiosWithAuth()
      .post(
        "https://ptptsecretfamilyrecipes1.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        dispatch({ type: LOG_IN_SUCCESS });
        localStorage.setItem("token", res.data.token);
        // history.push('/');
        return true;
      })
      .catch(err => {
        dispatch({ type: LOG_IN_FAILURE, payload: err });
        return false;
      });
  };

export const FIND_USER_START = "FIND_USER_START"
export const FIND_USER_SUCCESS = "FIND_USER_SUCCESS"
export const FIND_USER_FAILURE = "FIND_USER_FAILURE"

export const findUser = userID => dispatch => {
    dispatch({ type: FIND_USER_START });
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(res => {
        dispatch({ type: FIND_USER_SUCCESS, payload: res.data.user });
      })
      .catch(err => {
        dispatch({ type: FIND_USER_FAILURE, payload: err });
      });
  };

export const ADD_USER_START = "ADD_USER_START"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILURE = "ADD_USER_FAILURE"

export const addUser = (newUser, history) => dispatch => {
    dispatch({ type: ADD_USER_START });
    axiosWithAuth()
      .post("/users", newUser)
      .then(res => {
        dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
        const user_id = res.data[res.data.length + 1].id
        history.push(`/users/${user_id}`)
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAILURE, payload: err });
      });
  };

export const GET_RECIPE_BY_ID_START = "GET_RECIPE_BY_ID_START";
export const GET_RECIPE_BY_ID_SUCCESS = "GET_RECIPE_BY_ID_SUCCESS";
export const GET_RECIPE_BY_ID_FAILURE = "GET_RECIPE_BY_ID_FAILURE";

export const getRecipeByID = recipeID => dispatch => {
    dispatch({ type: GET_RECIPE_BY_ID_START });
    axiosWithAuth()
      .get(`/recipes/${recipeID}`)
      .then(res => {
        dispatch({ type: GET_RECIPE_BY_ID_SUCCESS, payload: res.data.recipe });
      })
      .catch(err => {
        dispatch({ type: GET_RECIPE_BY_ID_FAILURE, payload: err });
      });
  };

export const GET_RECIPE_BY_TYPE_START = "GET_RECIPE_BY_TYPE_START";
export const GET_RECIPE_BY_TYPE_SUCCESS = "GET_RECIPE_BY_TYPE_SUCCESS";
export const GET_RECIPE_BY_TYPE_FAILURE = "GET_RECIPE_BY_TYPE_FAILURE";

export const GET_ALL_RECIPES_START = "GET_ALL_RECIPES_START";
export const GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS";
export const GET_ALL_RECIPES_FAILURE = "GET_ALL_RECIPES_FAILURE";

export const getAllRecipes = recipeID => dispatch => {
    dispatch({ type: GET_ALL_RECIPES_START });
    axiosWithAuth()
      .get(`/recipes`)
      .then(res => {
        dispatch({ type: GET_ALL_RECIPES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_ALL_RECIPES_FAILURE, payload: err });
      });
  };

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = (newRecipe, history) => dispatch => {
    dispatch({ type: ADD_RECIPE_START });
    axiosWithAuth()
      .post(`/users/${window.localStorage.getItem('userId')}/recipes`, newRecipe)
      .then(res => {
        dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
        const recipe_id = res.data[res.data.length + 1].id
        history.push(`/recipes/${recipe_id}`)
      })
      .catch(err => {
        dispatch({ type: ADD_RECIPE_FAILURE, payload: err });
      });
  };

export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const updateRecipe = (recipeID, editedRecipe, history) => dispatch => {
  dispatch({ type: EDIT_RECIPE_START });
  axiosWithAuth()
    .put(`/recipes/${recipeID}`, editedRecipe)
    .then(res => {
      dispatch({ type: EDIT_RECIPE_SUCCESS, payload: res.data });
      const recipe_id = res.data.id
      history.push(`/recipes/${recipe_id}`)
    })
    .catch(err => {
      dispatch({ type: EDIT_RECIPE_FAILURE, payload: err });
    });
};

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const deleteRecipe = (recipeID, history) => dispatch => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(`/recipes/${recipeID}`)
    .then(res => {
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
      history.push('/');
    })
    .catch(err => {
      dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
    });
};