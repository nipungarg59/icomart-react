import React from 'react'

import './Card.css';

const time = (t) => {
  if (t < 1000) {
    return `${t} milliseconds`
  } else if (t < 60 * 1000) {
    return `${Math.round(t / 1000)} seconds`
  } else if (t < 60 * 60 * 1000) {
    return `${Math.round(t / 60000)} minutes`
  } else if (t < 24 * 60 * 60 * 1000) {
    return `${Math.round(t / 3600000)} hours`
  } else if (t < 356 * 24 * 60 * 60 * 1000) {
    return `${Math.round(t / 86400000)} days`
  } else {
    return `${Math.round(t / 31536000000)} years`
  }
}

const Card = ({ ico }) => (
  <div className="card">
    {ico.ico_name ? <img src={ico.img_url} alt={ico.ico_name} className="card-image"/> : ""}
    <h1 className="card-title text-center">{ico.ico_name}</h1>
    <h4 className="text-muted text-center">{time(new Date(ico.close_date) - new Date())} left</h4>
    <p className="card-body">{ico.short_description}</p>
  </div>
)

export default Card
