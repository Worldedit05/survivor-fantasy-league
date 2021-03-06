import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import '../public/src/css/admin.css';

import routes from './config/routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('app')
);
