import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  footer: {
    background: '#16222a',
    background: 'linear-gradient(to right, #16222a, #3a6073)',
    color: 'white',
    padding: '40px 0'
  },
  link: {
    color: 'white'
  },
  list: {
    listStyle: 'none'
  },
  logo: {
    width: '100%',
    height: '100px',
    border: '1px solid white'
  }
}

const Footer = () => (
  <div style={styles.footer}>
    <Grid>
      <Row>
        <Col md={6}>
          <Row>
            <Col sm={6}>
              <img src="" alt="LOGO" style={styles.logo}/>
              <p>Punchline</p>
              <p>© 2017 All rights reserved</p>
            </Col>
            <Col sm={6}>
              <ul style={styles.list}>
                <li><a href="" style={styles.link}>Terms</a></li>
                <li><a href="" style={styles.link}>Privacy</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <ul style={styles.list}>
            <li><a href="" style={styles.link}>other</a></li>
            <li><a href="" style={styles.link}>links</a></li>
            <li><a href="" style={styles.link}>as</a></li>
            <li><a href="" style={styles.link}>needed</a></li>
          </ul>
        </Col>
        <Col md={2}>
          <ul style={styles.list}>
            <li><a href="" style={styles.link}>Market Insight</a></li>
            <li><a href="" style={styles.link}>ICO List</a></li>
            <li><a href="" style={styles.link}>ICO Stats</a></li>
            <li><a href="" style={styles.link}>Rating System</a></li>
          </ul>
        </Col>
        <Col md={2}>
          <ul style={styles.list}>
            <li><a href="" style={styles.link}>Social</a></li>
            <li><a href="" style={styles.link}>Facebook</a></li>
            <li><a href="" style={styles.link}>Twitter</a></li>
            <li><a href="" style={styles.link}>Telegram</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Footer
