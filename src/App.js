import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';

// COMPONENTS
import SignForm from "./components/SignUpForm";
import LoginForm from "./components/Login";
import AddJokeForm from "./components/AddJokeForm";
import Navigation from "./components/Navigation";
import JokesCardDisplay from "./components/JokesCardDisplay";
import PrivateRoute from './components/PrivateRoute';
<<<<<<< HEAD
import UpdateForm from "./components/UpdateForm"
=======

>>>>>>> bfd93cd854fff7633443be78d1d211a21b9672f2

function App() {

  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Route exact path="/" component={JokesCardDisplay} />
        <Route exact path="/signup" component={SignForm} />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute path="/addjoke" component={AddJokeForm} />
<<<<<<< HEAD
        <PrivateRoute path="/jokes/:id" component={UpdateForm} />
=======
>>>>>>> bfd93cd854fff7633443be78d1d211a21b9672f2
      </div>
    </Router>
  );
}

export default App;