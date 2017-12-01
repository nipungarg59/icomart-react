import React from 'react'

const styles = {
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
}

const Newsletter = () => (
  <div style={styles.outer}>
    <h3 style={styles.header} className="text-center">Subscribe to Newsletter</h3>
    <div style={styles.main}>
      <input type="email" />
      <button className="btn btn-primary btn-lg" style={styles.button}>Subscribe</button>
    </div>
  </div>
)

export default Newsletter
