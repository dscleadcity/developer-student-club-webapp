import React, { Component } from 'react';

import './App.css';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Social extends Component {
  render() {
    return (
      <div>
        
        <h3 style={powerStyle} class ="content">Like & Follow Us On</h3>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <div class="col"></div>
              <div class="col-4">
                <a href="https://instagram.com/dscleadcity"><i class="fab fa-instagram fa-3x"></i></a>
              </div>
              <div class="col-4">
                <a href="https://twitter.com/dscleadcity"><i class="fab fa-twitter fa-3x"></i></a>
              </div>
              <div class="col"></div>
            </div>
            <div class="col"></div>
          </div>
        </div>
          
      </div>
    );
  }
};