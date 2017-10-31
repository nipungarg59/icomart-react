import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

import './Login.css'

class Login extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="loginUsername">
          <ControlLabel>Username or Email</ControlLabel>
          <FormControl type="text" placeholder="john.doe@example.com"/>
        </FormGroup>
        <FormGroup controlId="loginPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password"/>
        </FormGroup>
        <FormGroup controlId="loginSubmit">
          <FormControl type="submit" value="Login"/>
        </FormGroup>
      </Form>
    )
  }
}

export default Login