import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const registerUser = (credentials, history) => dispatch => {
    const userCred = { email: data.email, password: data.password }
    dispatch({ type: REGISTER_START });
    axios
      .post(
        "http://localhost:5000/api/auth/register",
        userCred
      )
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS });
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          history.push('/');
        } else {
          credentials.history.push('/login');
        }
        return true;
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload: err });
        return false;
      });
  };

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const FIND_ALL_USERS_START = "FIND_ALL_USERS_START"
export const FIND_ALL_USERS_SUCCESS = "FIND_ALL_USERS_SUCCESS"
export const FIND_ALL_USERS_FAILURE = "FIND_ALL_USERS_FAILURE"

export const FIND_USER_START = "FIND_USER_START"
export const FIND_USER_SUCCESS = "FIND_USER_SUCCESS"
export const FIND_USER_FAILURE = "FIND_USER_FAILURE"


export const FIND_BY_USER_START = "FIND_BY_USER_START"
export const FIND_BY_USER_SUCCESS = "FIND_BY_USER_SUCCESS"
export const FIND_BY_USER_FAILURE = "FIND_BY_USER_FAILURE"

export const ADD_USER_START = "ADD_USER_START"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILURE = "ADD_USER_FAILURE"

export const GET_RECIPE_BY_ID_START = "GET_RECIPE_BY_ID_START";
export const GET_RECIPE_BY_ID_SUCCESS = "GET_RECIPE_BY_ID_SUCCESS";
export const GET_RECIPE_BY_ID_FAIL = "GET_RECIPE_BY_ID_FAIL";

export const GET_RECIPE_BY_TYPE_START = "GET_RECIPE_BY_TYPE_START";
export const GET_RECIPE_BY_TYPE_SUCCESS = "GET_RECIPE_BY_TYPE_SUCCESS";
export const GET_RECIPE_BY_TYPE_FAIL = "GET_RECIPE_BY_TYPE_FAIL";

export const GET_ALL_RECIPES_START = "GET_ALL_RECIPES_START";
export const GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS";
export const GET_ALL_RECIPES_FAIL = "GET_ALL_RECIPES_FAIL";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL";

export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAIL = "EDIT_RECIPE_FAIL";

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAIL = "DELETE_RECIPE_FAIL";

export const GET_RECIPE_BY_ID_START = "GET_RECIPE_BY_ID_START";
export const GET_RECIPE_BY_ID_SUCCESS = "GET_RECIPE_BY_ID_SUCCESS";
export const GET_RECIPE_BY_ID_FAIL = "GET_RECIPE_BY_ID_FAIL";