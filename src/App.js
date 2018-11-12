import React, { Component } from 'react';
import MenuBar from './viewComponents/menubar.jsx.js';
import ContentScreen from './viewComponents/contentscreen.jsx.js';

import Config from './lib/config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: null }
    };
    this.config = new Config(this.state);
  }
  render() {
    return (
      <div id="app" className="columns">
        <MenuBar />
        <ContentScreen />
      </div>
    );
  }
}

export default App;
