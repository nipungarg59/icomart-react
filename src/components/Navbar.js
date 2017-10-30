import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const NavbarComponent = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">ICO Farm</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default NavbarComponent