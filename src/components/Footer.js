import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = StyleSheet.create({
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
})

const Footer = () => (
  <div className={css(styles.footer)}>
    <Grid>
      <Row>
        <Col md={6}>
          <Row>
            <Col sm={6}>
              <img className={css(styles.logo)} src="" alt="LOGO"/>
              <p>Punchline</p>
              <p>© 2017 All rights reserved</p>
            </Col>
            <Col sm={6}>
              <ul className={css(styles.list)}>
                <li><a href="" className={css(styles.link)}>Terms</a></li>
                <li><a href="" className={css(styles.link)}>Privacy</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <ul className={css(styles.list)}>
            <li><a href="" className={css(styles.link)}>other</a></li>
            <li><a href="" className={css(styles.link)}>links</a></li>
            <li><a href="" className={css(styles.link)}>as</a></li>
            <li><a href="" className={css(styles.link)}>needed</a></li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className={css(styles.list)}>
            <li><a href="" className={css(styles.link)}>Market Insight</a></li>
            <li><a href="" className={css(styles.link)}>ICO List</a></li>
            <li><a href="" className={css(styles.link)}>ICO Stats</a></li>
            <li><a href="" className={css(styles.link)}>Rating System</a></li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className={css(styles.list)}>
            <li><a href="" className={css(styles.link)}>Social</a></li>
            <li><a href="" className={css(styles.link)}>Facebook</a></li>
            <li><a href="" className={css(styles.link)}>Twitter</a></li>
            <li><a href="" className={css(styles.link)}>Telegram</a></li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Footer
