import React, { Component } from 'react';

import AppMenu from './components/AppMenu';
import './components/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppMenu />
      </div>
    );
  }
}

export default App;
