//import * as types from './actions/actions';

//export default function (state = [], action) {
    //const response = action.response;

    //switch (action.type) {
        //case types.LOGIN_USER_SUCCESS:
            //return { ...state, response };
        //case types.LOGIN_USER_ERROR:
            //return { ...state, response };
        //default:
            //return state;
    //}
//};

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/loginAction";

const initialState = {
    isFetching: false,
    error: "",
    loggedIn: false
};

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default signUpReducer;