import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';


// ACTION TYPES
export const START_FETCHING = 'START_FETCHING'

// ACTIONS
export const register = (credentials) => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .post("https://reqres.in/api/users", credentials)
    .then(res => {
      console.log("reducers/signUpReducer.js: post res: ", res);
      // setStatus(res.data);
      // resetForm();
    })
    .catch(err => console.log(err));
}