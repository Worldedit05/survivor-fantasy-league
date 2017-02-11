import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../pages/Main';
import Scores from '../pages/Scores';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

    </Route>
    <Route path="/scores" component={Scores} />
  </Router>
);
