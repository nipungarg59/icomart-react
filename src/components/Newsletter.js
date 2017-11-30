import React from 'react'

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    fontSize: '2em',
    backgroundColor: '#AEB8C1',
    overflow: 'hidden',
  },
  button: {
    marginLeft: '10px'
  }
}

const Newsletter = () => (
  <div style={styles.main}>
    <input type="email"/>
    <button className="btn btn-primary" style={styles.button}>Subscribe to Newsletter</button>
  </div>
)

export default Newsletter
