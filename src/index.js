import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

import './assets/stylesheets/style.scss';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
