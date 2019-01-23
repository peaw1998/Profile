import React from 'react';
import './component.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Header-Font">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Resume</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com/maa.peawpeaw">Facebook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/peaw1998">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Detail
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Education
                  </DropdownItem>
                  <DropdownItem>
                    Skills
                  </DropdownItem>
                  <DropdownItem/>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}