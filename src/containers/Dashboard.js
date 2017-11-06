import React from 'react'
import { Jumbotron, Tabs, Tab } from 'react-bootstrap'

import './Dashboard.css'

const Dashboard = () => (
  <div>
    <Jumbotron>
      <h1>ICO Farm</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </Jumbotron>
    <Tabs bsStyle="pills" defaultActiveKey={1} id="tabs-ico">
      <Tab eventKey={1} title="Trending"><h1>TRENDING</h1></Tab>
      <Tab eventKey={2} title="Upcoming"><h1>UPCOMING</h1></Tab>
      <Tab eventKey={3} title="Ongoing"><h1>ONGOING</h1></Tab>
      <Tab eventKey={4} title="Recent"><h1>RECENT</h1></Tab>
    </Tabs>
  </div>
)

export default Dashboard