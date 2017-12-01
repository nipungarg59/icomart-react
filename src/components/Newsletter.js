import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  outer: {
    padding: '40px',
    fontSize: '2em',
    backgroundColor: '#AEB8C1',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '40px',
  },
  button: {
    marginLeft: '10px',
  },
  header: {
    color: 'white',
  }
})

const Newsletter = () => (
  <div className={css(styles.outer)}>
    <h3 className={`text-center ${css(styles.header)}`}>Subscribe to Newsletter</h3>
    <div className={css(styles.main)}>
      <input type="email" />
      <button className={`btn btn-primary btn-lg ${css(styles.button)}`}>Subscribe</button>
    </div>
  </div>
)

export default Newsletter
