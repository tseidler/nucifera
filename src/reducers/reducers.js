import apiConnect from './api_connect';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  connect_to_api: apiConnect
});

export default reducers;
