/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes, { object } from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { withStyles } from '@material-ui/core/styles'

import Header from './layouts/Header';
import Dashboard from './layouts/Dashboard';
import Performance from './layouts/Performance';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const routers = [
  { id: 1,
    label: 'UFORSE EDUCATION',
    link: '/',
    component: HomePage
  },
  { id: 2,
    label: 'Dashboard',
    link: '/dashboard',
    component: Dashboard
  },
  { id: 3,
    label: 'Performance',
    link: '/performance',
    component: Performance
  },
  { id: 4,
    label: 'About',
    link: '/about',
    component: AboutPage
  },
]

const style = (theme) => ({
  root: {
    // padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header routers={routers} />
        <section className={classes.root}>
          <Switch>
            {routers.map(router => {
              if (router.id == 1) {
                return <Route exact key={router.id} path={router.link} component={router.component}  />
              } else {
                return <Route key={router.id} path={router.link} component={router.component}  />
              }
            })}
            <Route component={NotFoundPage} />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: object
};

export default hot(module)(withStyles(style)(App));
