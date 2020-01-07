import { axiosWithAuth } from '../utils/axiosWithAuth';


// ACTION TYPES
export const START_FETCHING = 'START_FETCHING'
export const ADDJOKE_SUCCESS = 'REGISTER_SUCCESS'

// ACTIONS
export const addJoke = (joke) => dispatch => {
  dispatch({ type: START_FETCHING });
  joke = { ...joke, private: joke.publicJoke }
  delete joke.publicJoke
  axiosWithAuth()
    .post("/jokes", joke)
    .then(res => {
      dispatch({ type: ADDJOKE_SUCCESS })
      console.log(res)
    })
    .catch(error => {
      console.log(error.response)
    });
}