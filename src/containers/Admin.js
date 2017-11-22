import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Tabs, Tab } from 'react-bootstrap'
import IcoList from '../components/IcoList'
import './Admin.css'

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      approved : [],
      pending : []
    }
    this.handleTab = this.handleTab.bind(this)
    this.handelButtonClick = this.handelButtonClick.bind(this)
  }

  changeIcoStatus(id, _is_verified){

    fetch(`http://${this.props.baseURL}/admin/change/ico/verification/status`, {
      method: "POST",
      body: JSON.stringify({id : id, is_verified : _is_verified}),
      headers: {
        "Content-Type": "application/json",
        "SESSIONID": this.props.session_id
      },
    }).then(res => res.json()).then(res => { 
      if(_is_verified){
        this.handleTab(1)
      }
      else {
        this.handleTab(2)
      }
    })
  }

  fetchIcos(filter) {
    fetch(`http://${this.props.baseURL}/admin/get/icos?filter=${filter}`, {
      headers: {
        "SESSIONID": this.props.session_id
      },
    }).then(res => res.json()).then(res => {
      switch(filter) {
        case 'PENDING':
          this.setState({pending : res.ico_list})
          break
        case 'APPROVED':
          this.setState({approved : res.ico_list})
          break
      }
    })
    
  }

  handleTab(tab) {
    switch(tab) {
      case 1:
        this.fetchIcos('PENDING')
        break
      case 2:
        this.fetchIcos('APPROVED')
        break
    }
  }

  handelButtonClick(key, type) {
    switch(type) {
      case 'Pending':
        this.changeIcoStatus(this.state.pending[key].id, true)
        break
      case 'Approved':
        this.changeIcoStatus(this.state.approved[key].id, false)
        break
    }
  }
  
  isAuthenticated() {
    return [1, 'admin']
  }


  componentDidMount() {
    var auth = this.isAuthenticated()
    if (auth[0]) {
      
      if(auth[1]==='admin') {
        this.handleTab(1)
      }
      else {
        this.props.history.push("/?ref=RESTRICTED")
      }
    }
    else {
      this.props.history.push("/auth/login?ref=SESSION_EXP")
    }
  }
    
  render() {
    return(
      <div className="admin">
      	<Tabs bsStyle="pills" className="tabs" justified defaultActiveKey={1} id="admin-tabs-ico" onSelect={this.handleTab}>
          <Tab eventKey={1} title="Pending Icos">
            <IcoList title="Pending" data={this.state.pending} type="pending" handelButtonClick={this.handelButtonClick}/>
          </Tab>
          <Tab eventKey={2} title="Approved Icos">
            <IcoList title="Approved" data={this.state.approved} type="approved" handelButtonClick={this.handelButtonClick}/>
          </Tab>
        </Tabs>
      </div>
    )
  }

}

export default withRouter(Admin)