import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class app extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route exact={true} path="/">
            <h1>Home</h1>
          </Route>
          <Route path="*">
            <h1>404 Error</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
