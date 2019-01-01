import React, { Component } from 'react';

import './App.css';

const footerStyle = {
  textAlign: "center",
  marginTop: "2em"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h6 class="white-text">DSC Lead City University &copy; 2018 - 2019</h6>
      </div>
    );
  }
}
