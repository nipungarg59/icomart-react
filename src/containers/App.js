import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'

import Navbar from '../components/Navbar'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin(data) {
    this.setState({ ...data })
  }

  handleLogout() {
    fetch('http://172.16.96.208:8000/logout', {
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
            <Route path="/auth/login" render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route path="/auth/register" component={Register}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App