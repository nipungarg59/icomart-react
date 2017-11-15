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
    this.state = {
      username: '',
      password: '',
      blockquoteClass : "block block-none",
      blockquoteText : ""
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handelClick = this.handelClick.bind(this)

  }

  handleChangeUsername(evt) {
    this.setState({ username: evt.target.value })
  }

  handleChangePassword(evt) {
    this.setState({ password: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    fetch(`http://${this.props.baseURL}/login`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => { this.props.handleLogin(res) })
  }


  handelClick(evt) {
    this.setState({ blockquoteClass : 'block-none'})
  }


  componentWillMount(){
    var ref = window.location.search.replace('?','').split('=')[1]
    
    if(ref){
      var classes = "", text = ""
      
      if (ref === "email_INVAL" || ref === "R_PWD_INVAL"){
        classes = "block block-red"
        text = "Link was Invalid. Try Logging again."
      }
      else if (ref === "email_EXP" || ref === "R_PWD_EXP"){
        classes = "block block-red"
        text = "Link Expired. Try Logging again."
      }
      else if(ref === "email_VAL"){
        classes = "block block-green"
        text = "Email successfully veified."
      }
      else if(ref === "R_PWD_VAL"){
        classes = "block block-green"
        text = "Password successfully changed."
      }
      this.setState({
        blockquoteClass : classes,
        blockquoteText : text
      })
    }
  
  }


  render() {
    return (
      <div>
        
        <blockquote className={this.state.blockquoteClass}>
          <span className="fa fa-remove cross" onClick={this.handelClick}>
          </span>
          <span className="text">
            {this.state.blockquoteText}
          </span>
        </blockquote>
        
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="loginUsername">
            <ControlLabel>Username or Email</ControlLabel>
            <FormControl
              type="text"
              placeholder="john.doe@example.com"
              value={this.state.username}
              onChange={this.handleChangeUsername}/>
          </FormGroup>
          <FormGroup controlId="loginPassword">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}/>
          </FormGroup>
          <FormGroup controlId="loginSubmit">
            <FormControl type="submit" value="Login"/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login
