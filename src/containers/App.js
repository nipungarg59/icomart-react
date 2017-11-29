import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Publish from './Publish'
import Admin from './Admin'
import Profile from '../components/Profile'
import VerifyEmail from '../components/VerifyEmail'
import ResetPassword from '../components/ResetPassword'
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'
import Upload from '../components/Upload'
import Footer from '../components/Footer'

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
    localStorage.setItem('session_id', data.session_id)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  componentWillMount() {
    if(localStorage.getItem("session_id")) {
      this.setState({
        session_id : localStorage.getItem("session_id"),
        user : JSON.parse(localStorage.getItem("user"))
      })
    }
    console.log(localStorage.getItem("session_id"), JSON.parse(localStorage.getItem("user")))
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
            user={this.state.user ? this.state.user : undefined}
            handleLogout={this.handleLogout}/>

          <div id="main">
            <Route path="/" exact render={() => <Dashboard baseURL={this.state.baseURL}/>}/>
            <Route path="/auth/login" render={() => <Login baseURL={this.state.baseURL} handleLogin={this.handleLogin}/>}/>
            <Route path="/auth/register" render={() => <Register baseURL={this.state.baseURL}/>}/>
            <Route path="/auth/verify/email/:token" render={() => <VerifyEmail baseURL={this.state.baseURL}/>}/>
            <Route path="/auth/reset/password/:token" render={() => <ResetPassword baseURL={this.state.baseURL}/>}/>
            <Route path="/profile" render={() => <Profile user={this.state.user}/>}/>
            <Route path="/ico/publish" render={() => <Publish baseURL={this.state.baseURL} session_id={this.state.session_id}/>}/>
            <Route path="/admin" exact render={() => <Admin baseURL={this.state.baseURL} session_id={this.state.session_id}/>}/>

            <Route path="/upload" component={Upload}/>
          </div>

          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
