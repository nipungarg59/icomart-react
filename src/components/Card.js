import React from 'react'

import './Card.css';

const Card = ({ ico }) => (
  <div className="card">
    <h1 className="card-title">{ico.ico_name}</h1>
    <img src={ico.img_url} alt={ico.ico_name} className="card-image"/>
    <p className="card-body">{ico.short_description}</p>
  </div>
)

export default Card
