/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import Dashboard from './layouts/Dashboard';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <React.Fragment>
        <div className="header">
          <NavLink exact to="/" activeStyle={activeStyle}>UFORSE PORTAL</NavLink>
          <NavLink to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink>
          <NavLink to="/about" activeStyle={activeStyle}>Performance</NavLink>
        </div>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
