import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'

import Navbar from '../components/Navbar'

import './App.css'

const App = () => (
  <Router>
    <div id="app">
      <Navbar/>

      <div className="container" id="main">
        <Route path="/auth/login" component={Login}/>
        <Route path="/auth/register" component={Register}/>
      </div>
    </div>
  </Router>
)

export default App