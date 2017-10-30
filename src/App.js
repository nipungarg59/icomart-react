import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default App = () => (
  <Router>
    <Route path="/auth/login" component={Login}/>
    <Route path="/auth/register" component={Register}/>
    <Route path="/auth/reset/:token" component={Reset}/>
    <Route path="/auth/confirm/:token" component={Confirm}/>
  </Router>
)