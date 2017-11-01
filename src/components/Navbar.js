import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
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
        <NavDropdown eventKey={1} title={username} id="dropdown-user">
          <LinkContainer to="/profile">
            <MenuItem eventKey={1.1}>Profile</MenuItem>
          </LinkContainer>
          <MenuItem eventKey={1.2}>Publish ICO</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={1.3}>Account Settings</MenuItem>
          <MenuItem eventKey={1.4} onClick={handleLogout}>Logout</MenuItem>
        </NavDropdown>
      </Nav>:
      <Nav pullRight>
        <LinkContainer to="/auth/login">
          <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/auth/register">
          <NavItem eventKey={2} href="#">Register</NavItem>
        </LinkContainer>
      </Nav>
    }
  </Navbar>
)

export default NavbarComponent