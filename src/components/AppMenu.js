import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/home';
import Gallery from './views/gallery';
import Workshops from './views/workshops';
import Join from './views/join';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="green" dark expand="md" scrolling>
            <NavbarBrand href="/">
                <strong>DSC Lead City University</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="/blog">Blog</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/gallery">Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/workshops">Workshops</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/join">Join</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          <Route path='/blog' component={() => window.location = 'http://dscleadcity.blogspot.com'}/>
          <Route exact path="/" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/join" component={Join} />
        </div>
      </Router>
    );
  }
}

export default AppMenu;