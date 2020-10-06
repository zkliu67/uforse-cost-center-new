/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import Header from './Header';
import Dashboard from './layouts/Dashboard';

import { Tabs, Tab } from '@material-ui/core';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const routers = [
  { label: 'UFORSE EDUCATION',
    link: '/',
    component: HomePage
  },
  { label: 'Dashboard',
    link: '/dashboard',
    component: Dashboard
  },
  { label: 'About',
    link: '/about',
    component: AboutPage
  },
]

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header routers={routers} />
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
