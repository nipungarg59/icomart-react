import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class Publish extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ico_name: '',
      short_description: '',
      start_date: '',
      close_date: '',
      country: '',
      percent_distribution_of_token: '',
      price_per_token: '',
      company_website_link: '',
      categories: ''
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

  handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://172.16.96.208:8000/publish/ico', {
      method: "POST",
      body: this.state,
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(res => {
      if (res.result) {
        console.log(res.message)
      } else {
        console.error(res.message)
      }
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Publish new ICO</h1>
        </div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="publish-ico-name">
            <ControlLabel>ICO Name</ControlLabel>
            <FormControl type="text" value={this.state.ico_name} onChange={this.handleChangeIcoName}/>
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
            <FormControl type="text" value={this.state.categories} onChange={this.handleChangeCategories} />
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
