import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/actions";

const initialState = {
    isFetching: false,
    isLoggedIn: false,
    isLoading: false,
    user: {}
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isFetching: false,
                user: action.payload.user
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};
