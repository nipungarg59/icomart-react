import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'


class ResetPassword extends Component {
	constructor(props){
		super(props);
		this.state = {password: '', confirm_password: ''}

		this.handleChangePassword = this.handleChangePassword.bind(this)
		this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleChangePassword(evt){
		this.setState({ password: evt.target.value })
	}


	handleChangeConfirmPassword(evt){
		this.setState({ confirm_password: evt.target.value })
	}


	handleSubmit(evt) {
    evt.preventDefault();
    
    fetch('http://172.16.96.208:8000/reset/password', {
      method: "POST",
      body: JSON.stringify({token: this.props.match.params.token, 
														type: "password_submission",
														password : this.state.password }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => { 
    	if(res.result===false){
          if (res.message.includes("exists")){
            this.props.history.push("/auth/login?ref=R_PWD_INVAL")
          } else{
            this.props.history.push("/auth/login?ref=R_PWD_EXP")
          }
        } else{
        	this.props.history.push("/auth/login?ref=R_PWD_VAL")
        }
      })
  }
  

  componentDidMount(){
    fetch('http://172.16.96.208:8000/reset/password', {
      method: "POST",
      body: JSON.stringify({token: this.props.match.params.token, type: "token_verification"}),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => { 
        if(res.result===false){

          if (res.message.includes("exists")){
            this.props.history.push("/auth/login?ref=R_PWD_INVAL")
          } else{
            this.props.history.push("/auth/login?ref=R_PWD_EXP")
          }
        }
      })
  }


  render(){
    return(
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="resetPasswordPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}/>
        </FormGroup>
        <FormGroup controlId="resetPasswordConfirmPassword">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.confirm_password}
            onChange={this.handleChangeConfirmPassword}/>
        </FormGroup>
        <FormGroup controlId="resetPasswordSubmit">
          <FormControl type="submit" value="Login"/>
        </FormGroup>
      </Form>
    )
  }

}

export default withRouter(ResetPassword)