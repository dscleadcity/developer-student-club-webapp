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
        
        <h4 style={powerStyle} class="white-text content">Follow Us For Tech Updates</h4>

        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-12 col-sm-6">
              <div class="row">
                <div class="col"></div>
                <div class="col-4">
                  <a href="https://instagram.com/dscleadcity" target="_blank" rel="noopener noreferrer" className="light-green-text"><i class="fab fa-instagram fa-3x"></i></a>
                </div>
                <div class="col-4">
                  <a href="https://twitter.com/dscleadcity" target="_blank" rel="noopener noreferrer" className="light-green-text"><i class="fab fa-twitter fa-3x"></i></a>
                </div>
                <div class="col"></div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
          
      </div>
    );
  }
};