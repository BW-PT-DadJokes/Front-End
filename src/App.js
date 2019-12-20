import React from "react";
import "./App.css";
import SignForm from "./components/SignUpForm";
import Navigation from "./components/Navigation";

import { Route } from "react-router-dom";
import JokeCard from "./components/jokes";
function App() {
  return (
    <div>
      <Navigation />
      {/* <Route exact path="/" component={JokeCard} /> */}
      <Route exact path="/signup" component={SignForm} />
    </div>
  );
}

export default App;
