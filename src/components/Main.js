import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import CountTo from 'react-count-to'

import './Main.css'

const Main = ({ onSelectTab }) => (
  <div id="mian">
    <div className="main">
      <div className="main-text">
        <span></span>
      </div>
      <div className="bottom">
        <div className="container publish-button">
          <a href="/ico/publish" className="btn bttn">
            <svg width="277" height="62">
              <defs>
                  <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282"/>
                      <stop offset="100%" stop-color="#E178ED" />
                  </linearGradient>
              </defs>
               <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
            </svg>
              <span>Publish Your Ico</span>
          </a>
        </div>
        <div className="stats">
          <Grid className="grid">
            <Row className="is-flex">
              <Col xs={4} className="purple" onClick={() => onSelectTab(4)}>
                <span>PAST &nbsp;&nbsp;<CountTo to={1234} speed={1234} /></span>
              </Col>
              <Col xs={4} className="blue" onClick={() => onSelectTab(3)}>
                <span>ONGOING &nbsp;&nbsp;<CountTo to={1500} speed={1500} /></span>
              </Col>
              <Col xs={4} className="blue2" onClick={() => onSelectTab(2)}>
                <span>UPCOMING &nbsp;&nbsp;<CountTo to={2000} speed={2000} /></span>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  </div>
)

export default Main
