import { START_FETCHING, REGISTER_SUCCESS } from "../actions/signUpAction";

const initialState = {
    //users: [],
    isFetching: false
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
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
};

export default signUpReducer;
