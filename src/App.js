import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";

import Home from "./Containers/Home";
import ShortenUrl from "./Containers/ShortenUrl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home {...props} />}
              something={"test"}
            />
            <Route
              path="/:randomCharacters"
              render={props => <ShortenUrl {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
