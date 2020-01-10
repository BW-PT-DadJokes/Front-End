import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { loginReducer } from "./loginReducer.js";

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer
});

export default rootReducer;
