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
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '40px',
    '@media only screen and (min-width : 480px)': {
      flexDirection: 'row',
    }
  },
  button: {
    marginTop: 10,
    '@media only screen and (min-width : 480px)': {
      marginLeft: 10,
      marginTop: 0,
    },
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
