import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const powerStyle = {
  textAlign: "center",
  marginBottom: "1em"
}

export default class Social extends Component {
  render() {
    return (
      <div>
          <h3 style={powerStyle}>Like & Follow Us On</h3>

          <a href="https://instagram.com/dscleadcity"><i class="fab fa-instagram fa-3x"></i></a>

          <a href="https://twitter.com/dscleadcity"><i class="fab fa-twitter-square fa-3x"></i></a>
      </div>
    );
  }
};