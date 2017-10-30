import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login'

import Navbar from '../components/Navbar'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Navbar/>

      <main className="container">
        <Route path="/auth/login" component={Login}/>
      </main>
    </div>
  </Router>
)

export default App