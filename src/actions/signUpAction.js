import { axiosWithAuth } from "../utils/axiosWithAuth";

// SIGNUP ACTION TYPES
export const START_FETCHING = "START_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

// LOGIN TYPES
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//SIGNUP ACTIONS
export const register = credentials => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .post("/auth/register", credentials)
    .then(res => {
      console.log("reducers/signUpReducer.js: post res: ", res);
      dispatch({ type: REGISTER_SUCCESS });
      // setStatus(res.data);
      // resetForm();
    })
    .catch(error => {
      console.log(error.response);
    });
};

//LOGIN ACTIONS
export const login = credentials => dispatch => {
  dispatch({
    type: LOGIN_REQUEST
  });
  axiosWithAuth()
    .post("/auth/login", credentials)
    .then(res => {
      console.log("reducers/loginReducer.js: post res: ", res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};