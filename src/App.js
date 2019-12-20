import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SignForm from "./components/SignUpForm";
import LoginForm from "./components/Login";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import JokesCardDisplay from "./components/JokesCardDisplay";
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={JokesCardDisplay} />
        <Route exact path="/signup" component={SignForm} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
