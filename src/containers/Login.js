import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeUsername(evt) {
    this.setState({ username: evt.target.value })
  }

  handleChangePassword(evt) {
    this.setState({ password: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://192.168.43.231:8000/login', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.text()).then(res => { console.log(res) })
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="loginUsername">
          <ControlLabel>Username or Email [{this.state.username}]</ControlLabel>
          <FormControl
            type="text"
            placeholder="john.doe@example.com"
            value={this.state.username}
            onChange={this.handleChangeUsername}/>
        </FormGroup>
        <FormGroup controlId="loginPassword">
          <ControlLabel>Password [{this.state.password}]</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}/>
        </FormGroup>
        <FormGroup controlId="loginSubmit">
          <FormControl type="submit" value="Login"/>
        </FormGroup>
      </Form>
    )
  }
}

export default Login