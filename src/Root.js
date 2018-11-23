import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Screens
import App from './app/AppContainer';
import ConnectToCoconut from './connectToCoconut/ConnectToCoconutContainer';

// everything else
import Config from './utils/config';
import ProtectedRoute from './components/protectedRoute.jsx';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: null, name: null }
    };
    this.config = new Config(this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <ProtectedRoute path="/" component={App} redirect={ConnectToCoconut} authenticated={this.state.user.id !== null} />
      </BrowserRouter>
    );
  }
}

export default Root;
