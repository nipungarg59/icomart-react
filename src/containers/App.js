import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Publish from './Publish'
import Profile from '../components/Profile'
import VerifyEmail from '../components/VerifyEmail'
import ResetPassword from '../components/ResetPassword'
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'api.staging.icofarm.net'
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin(data) {
    this.setState({ ...data })
  }

  handleLogout() {
    fetch(`http://${this.state.baseURL}/logout`, {
      method: 'POST',
      headers: {
        'SESSIONID': this.state.session_id
      }
    }).then(() => {
      alert('Logged out successfully!')
      this.setState({ user: undefined, session_id: undefined})
    })
  }

  render() {
    return (
      <Router>
        <div id="app">
          <Navbar
            username={this.state.user ? this.state.user.username : undefined}
            handleLogout={this.handleLogout}/>

          <div className="container" id="main">
            <Route path="/" exact component={Dashboard}/>
            <Route path="/auth/login" render={() => <Login baseURL={this.state.baseURL} handleLogin={this.handleLogin}/>}/>
            <Route path="/auth/register" render={() => <Register baseURL={this.state}/>}/>
            <Route path="/auth/verify/email/:token" render={() => <VerifyEmail baseURL={this.state.baseURL}/>}/>
            <Route path="/auth/reset/password/:token" render={() => <ResetPassword baseURL={this.state.baseURL}/>}/>
            <Route path="/profile" render={() => <Profile user={this.state.user}/>}/>
            <Route path="/ico/publish" render={() => <Publish baseURL={this.state.baseURL} session_id={this.state.session_id}/>}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
