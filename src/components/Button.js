import React from 'react'

const buttonTypes = (type) => {
  switch (type) {
    case 'facebook':
      return { icon: 'facebook-official', color: '3b5998' }
    case 'github':
      return { icon: 'github', color: '333' }
    case 'medium':
      return { icon: 'medium', color: '00ab6c' }
    case 'telegram':
      return { icon: 'telegram', color: '0088cc' }
    case 'twitter':
      return { icon: 'twitter', color: '1da1f2' }
    case 'youtube':
      return { icon: 'youtube-play', color: 'ff0000' }
  }
}

const Button = ({ link, type, text }) => (
  <a href={link} style={{
    backgroundColor: '#' + buttonTypes(type).color,
    color: 'white',
    padding: 5
  }}>
    <i className={`fa fa-${buttonTypes(type).icon}`}></i>
  </a>
)

export default Button
