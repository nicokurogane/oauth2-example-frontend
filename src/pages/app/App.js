import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Callback from "../callback/Callback";
import Home from "../home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/callback">
          <Callback />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
