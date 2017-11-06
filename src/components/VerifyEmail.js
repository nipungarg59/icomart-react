import React, { Component } from 'react'
import {withRouter} from "react-router-dom";

class VerifyEmail extends Component {
  
  componentDidMount(){
    fetch('http://172.16.96.208:8000/verify/email', {
      method: "POST",
      body: JSON.stringify({token: this.props.match.params.token}),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => { 
        if(res.result===false){

          if (res.message.includes("exists")){
            this.props.history.push("/auth/login?ref=email_INVAL");
          } else{
            this.props.history.push("/auth/login?ref=email_EXP"); 
          }

        } else{
          this.props.history.push("/auth/login?ref=email_VAL"); //
        }

      })
  }

  render(){
    return(
      <h1>Verifying email ...</h1>
    )
  }

}

export default withRouter(VerifyEmail)