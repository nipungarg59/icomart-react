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
    <div>
      <Navbar/>

      <main className="container">
        <Route path="/auth/login" component={Login}/>
        <Route path="/auth/register" component={Register}/>
      </main>
    </div>
  </Router>
)

export default App