import React, { Component } from 'react';
import MenuBar from './viewComponents/menubar.jsx.js';
import ContentScreen from './viewComponents/contentscreen.jsx.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: null }
    };
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
