import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";

import Home from "./Containers/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            {/* <Route path="/:id" component={ShortenUrl} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
