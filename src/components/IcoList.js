import React, { Component } from 'react'
import { Row, Col, Panel } from 'react-bootstrap'

import Card from './Card'

import './IcoList.css'

class IcoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title : '',
      data : '',
      showButton : 'hidden',
      buttonClass : ''
    }
    this.handelButtonClick = this.handelButtonClick.bind(this)
  }

  handelButtonClick(evt) {
    console.log('sdf', evt.target.value, this.state.title)
    this.props.handelButtonClick(evt.target.value, this.state.title)
  }

  getUpdatedStateData(props) {
    var state = {
      title : props.title,
      data : props.data,
      showButton : 'hidden',
      buttonText : '',
      buttonClass: ''
    }

    if(props.type==='approved')
    {
      state['showButton'] = ''
      state['buttonText'] = 'DisApprove'
      state['buttonClass'] = 'btn btn-danger ico-card-btn'
    }
    else if(props.type==='pending')
    {
      state['showButton'] = ''
      state['buttonText'] = 'Approve'
      state['buttonClass'] = 'btn btn-primary ico-card-btn'
    }
    return state
  }

  componentDidMount() {
    this.setState(this.getUpdatedStateData(this.props))
  }

  componentWillReceiveProps(nextProps) {
    if(this.props!==nextProps)
    {
      this.setState(this.getUpdatedStateData(nextProps))
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <Row>
          {
            this.state.data ?
              this.state.data.map((ico, i) =>
                <Col key={i} xs={12} sm={6} md={4} lg={3}>
                  <Card ico={ico} extra={
                    <div className={this.state.showButton}>
                      <button className={this.state.buttonClass} value={i} onClick={this.handelButtonClick}>{this.state.buttonText}</button>
                    </div>
                  }/>
                </Col>
              ) :
              <h3>Not Found</h3>
          }
        </Row>
      </div>
    )
  }

}


export default IcoList
