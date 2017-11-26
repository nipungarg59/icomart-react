import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

import Upload from '../components/Upload'
import './Publish.css'

class Publish extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ico_name: '',
      short_description: '',
      start_date: '',
      close_date: '',
      img_url: '',
      country: '',
      percent_distribution_of_token: '',
      price_per_token: '',
      company_website_link: '',
      categories: [],
      fetched_categories : []
    }

    this.handleChangeCategories = this.handleChangeCategories.bind(this)
    this.handleChangeCloseDate = this.handleChangeCloseDate.bind(this)
    this.handleChangeCompanyWebsiteLink = this.handleChangeCompanyWebsiteLink.bind(this)
    this.handleChangeCountry = this.handleChangeCountry.bind(this)
    this.handleChangeIcoName = this.handleChangeIcoName.bind(this)
    this.handleChangePercentDistributionOfToken = this.handleChangePercentDistributionOfToken.bind(this)
    this.handleChangePricePerToken = this.handleChangePricePerToken.bind(this)
    this.handleChangeShortDescription = this.handleChangeShortDescription.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
    this.handleImageDrop = this.handleImageDrop.bind(this)
  }

  componentDidMount() {

    fetch(`http://${this.props.baseURL}/get/ico/categories`).then(res => res.json()).then(res => {
      this.setState({fetched_categories : res.categories})
    })
  }

  handleChangeIcoName(evt) {
    this.setState({ ico_name: evt.target.value })
  }

  handleChangeShortDescription(evt) {
    this.setState({ short_description: evt.target.value })
  }

  handleChangeStartDate(evt) {
    this.setState({ start_date: evt.target.value })
  }

  handleChangeCloseDate(evt) {
    this.setState({ close_date: evt.target.value })
  }

  handleChangeCountry(evt) {
    this.setState({ country: evt.target.value })
  }

  handleChangePercentDistributionOfToken(evt) {
    this.setState({ percent_distribution_of_token: evt.target.value })
  }

  handleChangePricePerToken(evt) {
    this.setState({ price_per_token: evt.target.value })
  }

  handleChangeCompanyWebsiteLink(evt) {
    this.setState({ company_website_link: evt.target.value })
  }

  handleChangeCategories(evt) {
    this.setState({ categories: evt.target.value })
  }

  handleImageDrop(url) {
    // console.log(url)
    this.setState({ img_url : url})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // const categories = this.state.categories.split(',')
    // console.log({ ...this.state})
    fetch(`http://${this.props.baseURL}/publish/ico`, {
      method: "POST",
      body: JSON.stringify({ ...this.state}),
      headers: {
        "Content-Type": "application/json",
        "SESSIONID": this.props.session_id
      },
    }).then(res => res.json()).then(res => {
      if (res.result) {
        console.log(res.message)
      } else {
        console.error(res.message)
      }
    })
  }


  handleChangeCheckbox(evt) {
    // console.log("handleChangeCheckbox ", evt, evt.target.checked, evt.target.value)
    let cat_set = new Set(this.state.categories)
    if(evt.target.checked) {
      cat_set.add(evt.target.value)
    }
    else {
      cat_set.delete(evt.target.value)
    }
    this.setState({categories : [...cat_set]})
  }

  render() {
    return (
      <div id="publish">
        <div className="jumbotron">
          <h1>Publish new ICO</h1>
        </div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="publish-ico-name">
            <ControlLabel>ICO Name</ControlLabel>
            <FormControl type="text" value={this.state.ico_name} onChange={this.handleChangeIcoName}/>
          </FormGroup>
          <FormGroup controlId="publish-ico-image">
            <ControlLabel>ICO Image</ControlLabel>
            <Upload action={this.handleImageDrop} />
          </FormGroup>
          <FormGroup controlId="publish-short-description">
            <ControlLabel>Short Description</ControlLabel>
            <FormControl type="text" value={this.state.short_description} onChange={this.handleChangeShortDescription} />
          </FormGroup>
          <FormGroup controlId="publish-start-date">
            <ControlLabel>Start Date</ControlLabel>
            <FormControl type="date" value={this.state.start_date} onChange={this.handleChangeStartDate} />
          </FormGroup>
          <FormGroup controlId="publish-close-date">
            <ControlLabel>Close Date</ControlLabel>
            <FormControl type="date" value={this.state.close_date} onChange={this.handleChangeCloseDate} />
          </FormGroup>
          <FormGroup controlId="publish-country">
            <ControlLabel>Country</ControlLabel>
            <FormControl type="text" value={this.state.country} onChange={this.handleChangeCountry} />
          </FormGroup>
          <FormGroup controlId="publish-percent-distribution-of-token">
            <ControlLabel>Percent Distribution of Token</ControlLabel>
            <FormControl type="number" value={this.state.percent_distribution_of_token} onChange={this.handleChangePercentDistributionOfToken} />
          </FormGroup>
          <FormGroup controlId="publish-price-per-token">
            <ControlLabel>Price Per Token</ControlLabel>
            <FormControl type="number" value={this.state.price_per_token} onChange={this.handleChangePricePerToken} />
          </FormGroup>
          <FormGroup controlId="publish-company-website-link">
            <ControlLabel>Company Website Link</ControlLabel>
            <FormControl type="text" value={this.state.company_website_link} onChange={this.handleChangeCompanyWebsiteLink} />
          </FormGroup>
          <FormGroup controlId="publish-categories">
            <ControlLabel>Categories</ControlLabel>
            <br/>
            {
              this.state.fetched_categories ?
                this.state.fetched_categories.map((category, i) =>
                  <Col className="categories" key={i} xs={6} sm={6} md={5} lg={6}>
                    <input type="checkbox" value={category} onChange={this.handleChangeCheckbox}/>
                    <label >{category}</label>
                  </Col>
                ) :
                <h3>Not Found</h3>
            }
          </FormGroup>
          <FormGroup controlId="publish-submit">
            <FormControl type="submit" value="Publish" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Publish
