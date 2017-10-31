import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

function removeBlanks(obj) {
  let newObj = {}
  for(let k in obj) {
    if (obj[k]) {
      newObj[k] = obj[k]
    }
  }
  return newObj
}

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phone_number: '',
      password: '',
      username: '',
      first_name: '',
      last_name: '',
      date_of_birth: ''
    }

    this.handleChangeDateOfBirth = this.handleChangeDateOfBirth.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeEmail(evt) {
    this.setState({ email: evt.target.value })
  }

  handleChangePhoneNumber(evt) {
    this.setState({ phone_number: evt.target.value })
  }

  handleChangePassword(evt) {
    this.setState({ password: evt.target.value })
  }

  handleChangeUsername(evt) {
    this.setState({ username: evt.target.value })
  }

  handleChangeFirstName(evt) {
    this.setState({ first_name: evt.target.value })
  }

  handleChangeLastName(evt) {
    this.setState({ last_name: evt.target.value })
  }

  handleChangeDateOfBirth(evt) {
    this.setState({ date_of_birth: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://172.16.96.208:8000/signup', {
      method: "POST",
      body: JSON.stringify(removeBlanks(this.state)),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => {
      if (res.result) {
        console.log(res.message)
      } else {
        console.error(res.message)
      }
    })
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="registerFirstName">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="John"
            value={this.state.first_name}
            onChange={this.handleChangeFirstName}/>
        </FormGroup>
        <FormGroup controlId="registerLastName">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Doe"
            value={this.state.last_name}
            onChange={this.handleChangeLastName}/>
        </FormGroup>
        <FormGroup controlId="registerDateOfBirth">
          <ControlLabel>Date of Birth</ControlLabel>
          <FormControl
            type="date"
            value={this.state.date_of_birth}
            onChange={this.handleChangeDateOfBirth}/>
        </FormGroup>
        <FormGroup controlId="registerEmail">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            placeholder="john.doe@example.com"
            value={this.state.email}
            onChange={this.handleChangeEmail}/>
        </FormGroup>
        <FormGroup controlId="registerPhone">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="number"
            value={this.state.phone_number}
            onChange={this.handleChangePhoneNumber}/>
        </FormGroup>
        <FormGroup controlId="registerUsername">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            placeholder="john.doe"
            value={this.state.username}
            onChange={this.handleChangeUsername}/>
        </FormGroup>
        <FormGroup controlId="registerPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}/>
        </FormGroup>
        <FormGroup controlId="registerSubmit">
          <FormControl type="submit" value="Register"/>
        </FormGroup>
      </Form>
    )
  }
}

export default Register