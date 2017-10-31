import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

class Register extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="registerFirstName">
          <ControlLabel>First Name</ControlLabel>
          <FormControl type="text" placeholder="John"/>
        </FormGroup>
        <FormGroup controlId="registerLastName">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl type="text" placeholder="Doe"/>
        </FormGroup>
        <FormGroup controlId="registerDateOfBirth">
          <ControlLabel>Date of Birth</ControlLabel>
          <FormControl type="date"/>
        </FormGroup>
        <FormGroup controlId="registerEmail">
          <ControlLabel>Email</ControlLabel>
          <FormControl type="email" placeholder="john.doe@example.com"/>
        </FormGroup>
        <FormGroup controlId="registerPhone">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl type="number"/>
        </FormGroup>
        <FormGroup controlId="registerUsername">
          <ControlLabel>Username</ControlLabel>
          <FormControl type="text" placeholder="john.doe"/>
        </FormGroup>
        <FormGroup controlId="registerPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password"/>
        </FormGroup>
        <FormGroup controlId="registerSubmit">
          <FormControl type="submit" value="Register"/>
        </FormGroup>
      </Form>
    )
  }
}

export default Register