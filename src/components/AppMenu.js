import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
                  <NavLink to="#">Blog</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/workshops">Workshops</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/worskops" component={Workshops} />
        </div>
      </Router>
    );
  }
}

export default AppMenu;