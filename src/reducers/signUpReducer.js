import {
    START_FETCHING,
} from "../actions";

const initialState = {
    //users: [],
    isFetching: false,
    //isPosting: false,
    //error: ""
};

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
};

export default signUpReducer;