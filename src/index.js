import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/style.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
