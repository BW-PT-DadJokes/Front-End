import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';


// ACTION TYPES
export const START_FETCHING = 'START_FETCHING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

// ACTIONS
export const register = (credentials) => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post("/auth/register", credentials)
    .then(res => {
      console.log("reducers/signUpReducer.js: post res: ", res);
      dispatch({ type: REGISTER_SUCCESS })
      // setStatus(res.data);
      // resetForm();
    })
    .catch(error => {
      console.log(error.response)
    });
}