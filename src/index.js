import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Root from './Root';
import reducers from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

import './assets/stylesheets/style.scss';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#appContainer')
);
registerServiceWorker();
