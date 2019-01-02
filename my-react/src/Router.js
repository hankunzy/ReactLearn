import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './containers/home';
import content from './containers/content';
import login from './containers/login';
import register from './containers/register';

class BasicRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/content" exact component={content} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={register} />
        </Switch>
      </Router>
    );
  }
}

export default BasicRoute;
