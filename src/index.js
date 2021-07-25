import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/errorBoundry/errorBoundry';
import store from './store';
import App from './components/app/app';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <App/>
        </Router>
      </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);


