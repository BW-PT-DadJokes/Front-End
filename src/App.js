import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignForm from "./components/SignUpForm";
import Navigation from "./components/Navigation";

import { Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Route exact path="/" component={jokes} /> */}
        <Route exact path="/signup" component={SignForm} />
      </div>
    </Router>
  );
}

export default App;
