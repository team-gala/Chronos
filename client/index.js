import React from 'react';
import ReactDOM from 'react-dom';
// import { StripeProvider } from 'react-stripe-elements';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './app';

import './socket';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
