import { axiosWithAuth } from '../utils/axiosWithAuth';


// ACTION TYPES
export const START_FETCHING = 'START_FETCHING'
export const ADDJOKE_SUCCESS = 'REGISTER_SUCCESS'

// ACTIONS
export const addJoke = (joke, history) => dispatch => {
  dispatch({ type: START_FETCHING });
  joke = { ...joke, private: joke.privateJoke }
  delete joke.privateJoke
  axiosWithAuth()
    .post("/jokes", joke)
    .then(res => {
      dispatch({ type: ADDJOKE_SUCCESS })
      history.push('/')
    })
    .catch(error => {
      console.log(error.response)
    });
}