import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavbarComponent = ({ username }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">ICO Farm</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">{ username }</NavItem>
    </Nav>
  </Navbar>
)

export default NavbarComponent