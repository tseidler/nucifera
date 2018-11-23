import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home.jsx.js';
import News from './news/news.jsx.js';
import Users from './users//users.jsx.js';

class AppComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/news" component={News} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default AppComponent;
