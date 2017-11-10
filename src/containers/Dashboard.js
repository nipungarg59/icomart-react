import React, { Component } from 'react'
import { Jumbotron, Tabs, Tab, Grid, Row, Col } from 'react-bootstrap'

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
            <h1>TRENDING</h1>
            <Row>
              {
                this.state.trending ?
                this.state.trending.map((ico, i) =>
                  <Col key={i} xs={12} sm={6} md={4} lg={3}>{JSON.stringify(ico.ico_name)}</Col>
                ) :
                <h3>Not Found</h3>
              }
            </Row>
          </Tab>
          <Tab eventKey={2} title="Upcoming">
            <h1>UPCOMING</h1>
            <Row>
              {
                this.state.upcoming ?
                  this.state.upcoming.map((ico, i) =>
                    <Col key={i} xs={12} sm={6} md={4} lg={3}>{JSON.stringify(ico.ico_name)}</Col>
                  ) :
                <h3>Not Found</h3>
              }
            </Row>
          </Tab>
          <Tab eventKey={3} title="Ongoing">
            <h1>ONGOING</h1>
            <Row>
              {
                this.state.ongoing ?
                  this.state.ongoing.map((ico, i) =>
                    <Col key={i} xs={12} sm={6} md={4} lg={3}>{JSON.stringify(ico.ico_name)}</Col>
                  ) :
                <h3>Not Found</h3>
              }
            </Row>
          </Tab>
          <Tab eventKey={4} title="Recent">
            <h1>RECENT</h1>
            <Row>
              {
                this.state.recent ?
                  this.state.recent.map((ico, i) =>
                    <Col key={i} xs={12} sm={6} md={4} lg={3}>{JSON.stringify(ico.ico_name)}</Col>
                  ) :
                <h3>Not Found</h3>
              }
            </Row>
          </Tab>
        </Tabs>
      </Grid>
    )
  }
}

export default Dashboard
