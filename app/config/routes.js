import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../pages/Main';
import Scores from '../pages/Scores';
import Survivor from '../pages/Survivor';
import Login from '../pages/Login';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/scores" component={Scores} />
    <Route path="/survivor-list" component={Survivor} />
    <Route path="/login" component={Login} />
  </Router>
);
