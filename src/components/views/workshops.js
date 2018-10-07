import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

import '../App.css';

export default class CardExample extends Component {
  render() {
    return (
      <div>
        <div class="container">

          <h3 class="white-text content">WORKSHOPS 2018/2019</h3> 
          
          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardImage className="img-fluid" src="https://res.cloudinary.com/poetrique/image/upload/v1538925366/dsc-workshops/dscleadcity-WORKSHOP_1.png" waves />
                <CardBody>
                  <CardTitle>Introduction to Web Development & Github</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Build a Node.js web app using Google Cloud</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>
          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Cloud Firestore and Web</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>App Monetization</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Using Firebase Test Lab to improve Mobile App quality</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Using Google Cloud Test Lab to improve Mobile App quality</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Intro to Android development with Kotlin</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Build Your First Android App in Kotlin</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

          <div class="row content">
            <div class="col"></div>
            <div class="col-10 col-sm-8">
              <Card>
                <CardBody>
                  <CardTitle>Get your Startup started</CardTitle>
                  <CardText>
                    <p>Venue: ROC World Entrepreneurial Development Centre, Vocational Unit 1 Building</p>
                    <br />
                    <p><b>Lead City University, Ibadan - NG</b></p>
                    </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col"></div>
          </div>

        </div>
      </div>
    );
  }
}