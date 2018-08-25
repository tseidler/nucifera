import React, { Component } from 'react';
import MenuBar from './viewComponents/menubar.jsx.js';
import ContentScreen from './viewComponents/contentscreen.jsx.js';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { id: null }
    };
  }
  render() {
    return (
      <div id="app">
        <MenuBar />
        <ContentScreen />
      </div>
    );
  }
}

export default App;
