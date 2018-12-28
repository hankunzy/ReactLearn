import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/home';
import content from './components/content';
import login from './components/login';

class BasicRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/content" exact component={content} />
          <Route path="/login" exact component={login} />
        </Switch>
      </Router>
    );
  }
}

export default BasicRoute;
