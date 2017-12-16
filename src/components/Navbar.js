import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../images/output.png'

class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScrollHeight : 1,
      defaultOpacity : 0,
    }
  }


  componentDidMount() {      
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY/5) ;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
          console.log(newScrollHeight)
      }
    }
  }

  renderButtons() {
    const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '')
    if(pathname==='' || pathname==='ico/publish')
    {
      if(this.state.defaultOpacity)
      {
        this.setState({defaultOpacity:0})
      }
    }
    else
    {
      if(this.state.defaultOpacity===0)
      {
        this.setState({defaultOpacity:1})
      }
    }
    if(this.props.user)
    {
      if(pathname==='')
      {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#top">Home</a></li>
            <li><a href="#team">Our Team</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{this.props.user.username}<span className="caret"></span></a>
              <ul className="dropdown-menu animated fadeInUp" role="menu">
                <li><Link to="/profile">Profile</Link></li>
                {
                  this.props.user.user_type==='admin' ?
                    <li><Link to="/admin">Admin Panel</Link></li> :
                    <li></li>
                }
                <li><Link to="/ico/publish">Publish ICO</Link></li>
                <li className="divider"></li>
                <li><Link to="/">Account Settings</Link></li>
                <li><a onClick={this.props.handleLogout}>Logout</a></li>
              </ul>
            </li>
          </ul>
        )
      }
      else if(pathname==='ico/publish' || pathname==='profile' || pathname==='admin')
      {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{this.props.user.username}<span className="caret"></span></a>
              <ul className="dropdown-menu animated fadeInUp" role="menu">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/ico/publish">Publish ICO</Link></li>
                <li className="divider"></li>
                <li><Link to="/">Account Settings</Link></li>
                <li><a onClick={this.props.handleLogout}>Logout</a></li>
              </ul>
            </li>
          </ul>
        )
      }
    }
    else {
      if(pathname==='')
      {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#top">Home</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><Link to="/auth/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
          </ul>
        )
      }
      else if(pathname==='auth/login')
      {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth/register">Register</Link></li>
          </ul>
        )
      }
      else if(pathname==='auth/register')
      {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
        )
      }
    }
    
  }

  render() {
    const opacity = Math.min(Math.max(this.state.currentScrollHeight/100,this.state.defaultOpacity), 0.9)
    return (
      <div id="top">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-default navbar-fixed-top" style={{backgroundColor: `rgba(44,44,44,${opacity})`}} >
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="/" ><img src={logo}></img></a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
              {this.renderButtons() }
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavbarComponent
