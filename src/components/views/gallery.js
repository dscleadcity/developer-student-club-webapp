import React, { Component } from 'react';

import '../App.css';

const responsive = {
  width: "100%",
  height: "auto",
  margin: "0.5em 0 0.5em 0"
}

export default class Gallery extends Component {
  render() {
    return(
      <div>
        <h3 class="white-text content">PICTURES OF THE COMMUNITY</h3>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540439497/dsc-workshops/gallery/IMG_3848.jpg" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540439492/dsc-workshops/gallery/IMG_3859.jpg" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540438977/dsc-workshops/gallery/dsc8.jpg" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540438973/dsc-workshops/gallery/dsc7.jpg" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540438953/dsc-workshops/gallery/dsc6.jpg" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540438935/dsc-workshops/gallery/dsc3.jpg" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
            <div class="col-12 col-sm-4">
              <img style={responsive} src="" alt="" title="DSC Lead City Community" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}