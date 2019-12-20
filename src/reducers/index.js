import { combineReducers } from 'redux';
import signUp from './signUpReducer';
import login from './loginReducer.js';

const rootReducer = combineReducers({
    signUp, login
});

export default rootReducer;