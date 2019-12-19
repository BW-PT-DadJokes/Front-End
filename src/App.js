import React from "react";
import "./App.css";
import SignForm from "./components/SignUpForm";
import Navigation from "./components/Navigation";

import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      {/* <Route exact path="/" component={jokes} /> */}
      <Route exact path="/signup" component={SignForm} />
    </div>
  );
}

export default App;
