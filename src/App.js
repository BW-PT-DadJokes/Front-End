import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignForm from "./components/SignUpForm";
import LoginForm from "./components/Login";
import AddJokeForm from "./components/AddJokeForm";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import JokesCardDisplay from "./components/JokesCardDisplay";
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={JokesCardDisplay} />
        <Route exact path="/signup" component={SignForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/addjoke" component={AddJokeForm} />

      </div>
    </Router>
  );
}

export default App;


/*Route
  path="/update_item/:id"
  render={props => (
    <UpdateForm {...props} jokes={jokes} updateJokes={setJokes} />
  )}*/