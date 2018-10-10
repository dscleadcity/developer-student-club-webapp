import React, { Component } from 'react';

import AppMenu from './components/AppMenu';
import Social from './components/Social';
import Footer from './components/Footer';
import './components/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppMenu />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
