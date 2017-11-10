import React, { Component } from 'react'
import { Jumbotron, Tabs, Tab, Grid } from 'react-bootstrap'

import IcoList from '../components/IcoList'

import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trending: [],
      upcoming: [],
      ongoing: [],
      recent: []
    }

    this.handleTab = this.handleTab.bind(this)
  }

  sendRequest(filter) {
    fetch(`http://${this.props.baseURL}/get/ico`, {
      method: "POST",
      body: JSON.stringify({ filter }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => {
      switch(filter) {
        case 'TRENDING':
          this.setState({ trending: res.list })
          break
        case 'UPCOMING':
          this.setState({ upcoming: res.list })
          break
        case 'ONGOING':
          this.setState({ ongoing: res.list })
          break
        case 'RECENT':
          this.setState({ recent: res.list })
          break
      }
    })
  }

  handleTab(tab) {
    switch(tab) {
      case 1:
        this.sendRequest('TRENDING')
        break
      case 2:
        this.sendRequest('UPCOMING')
        break
      case 3:
        this.sendRequest('ONGOING')
        break
      case 4:
        this.sendRequest('RECENT')
        break
    }
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>ICO Farm</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </Jumbotron>
        <Tabs bsStyle="pills" defaultActiveKey={1} id="tabs-ico" onSelect={this.handleTab}>
          <Tab eventKey={1} title="Trending">
            <IcoList title="Trending" data={this.state.trending}/>
          </Tab>
          <Tab eventKey={2} title="Upcoming">
            <IcoList title="Upcoming" data={this.state.upcoming}/>
          </Tab>
          <Tab eventKey={3} title="Ongoing">
            <IcoList title="Ongoing" data={this.state.ongoing}/>
          </Tab>
          <Tab eventKey={4} title="Recent">
            <IcoList title="Recent" data={this.state.recent} />
          </Tab>
        </Tabs>
      </Grid>
    )
  }
}

export default Dashboard
