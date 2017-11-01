import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavbarComponent = ({ username, handleLogout }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">ICO Farm</Link>
      </Navbar.Brand>
    </Navbar.Header>
    { username ?
      <Nav pullRight>
        <NavItem eventKey={1}>{ username }</NavItem>
        <NavItem eventKey={2} onClick={handleLogout}>Logout</NavItem>
        <LinkContainer to="/profile">
          <NavItem eventKey={3}>Profile</NavItem>
        </LinkContainer>
      </Nav>:
      <Nav pullRight>
        <LinkContainer to="/auth/login">
          <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/auth/register">
          <NavItem eventKey={2} href="#">Register</NavItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <NavItem eventKey={3}>Profile</NavItem>
        </LinkContainer>
      </Nav>
    }
  </Navbar>
)

export default NavbarComponent