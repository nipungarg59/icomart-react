import React, { Component } from "react";
import { ControlLabel, Col } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Chip from "material-ui/Chip";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import DateTimePicker from "material-ui-datetimepicker";
import DatePickerDialog from "material-ui/DatePicker/DatePickerDialog";
import TimePickerDialog from "material-ui/TimePicker/TimePickerDialog";
import Paper from "material-ui/Paper";

import Upload from "../components/Upload";
import "./Publish.css";

class Publish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ico_name: "",
      short_description: "",
      description: "",
      start_date: new Date(),
      close_date: new Date(),
      img_url: "",
      country: "",
      percent_distribution_of_token: "",
      price_per_token: "",
      company_website_link: "",
      whitepaper_link: "",
      bitcoin_talk_link: "",
      bounty_campaign_link: "",
      medium_link: "",
      twitter_link: "",
      facebook_link: "",
      telegram_link: "",
      youtube_link: "",
      github_link: "",
      linkedin_link: "",
      categories: [],
      fetched_categories: {},
      activeStep: 0,
      categoryDialogOpen: false
    };

    this.handleChangeCloseDate = this.handleChangeCloseDate.bind(this);
    this.handleChangeLinks = this.handleChangeLinks.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeIcoName = this.handleChangeIcoName.bind(this);
    this.handleChangePercentDistributionOfToken = this.handleChangePercentDistributionOfToken.bind(
      this
    );
    this.handleChangePricePerToken = this.handleChangePricePerToken.bind(this);
    this.handleChangeShortDescription = this.handleChangeShortDescription.bind(
      this
    );
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handelDeleteCategoryFromChip = this.handelDeleteCategoryFromChip.bind(
      this
    );
    this.handelChangeDescription = this.handelChangeDescription.bind(this);
  }

  componentDidMount() {
    fetch(`http://${this.props.baseURL}/get/ico/categories`)
      .then(res => res.json())
      .then(res => {
        var data = {};
        res.categories.map((category, i) => {
          data[category] = false;
        });
        this.setState({ fetched_categories: data });
        console.log(data);
      });
  }

  handleOpenDialog() {
    this.setState({ categoryDialogOpen: true });
  }

  handleCloseDialog() {
    this.setState({ categoryDialogOpen: false });
  }

  handleNext() {
    this.setState({ activeStep: this.state.activeStep + 1 });
  }

  handleBack() {
    this.setState({ activeStep: this.state.activeStep - 1 });
  }

  handleReset() {
    this.props.history.push("/?ref=ICO_SUBMTD");
  }

  handleChangeIcoName(evt) {
    this.setState({ ico_name: evt.target.value });
  }

  handleChangeShortDescription(evt) {
    this.setState({ short_description: evt.target.value });
  }

  handelChangeDescription(evt) {
    this.setState({ description: evt.target.value });
  }

  handleChangeStartDate(date) {
    console.log(date);
    this.setState({ start_date: date });
  }

  handleChangeCloseDate(date) {
    this.setState({ close_date: date });
  }

  handleChangeCountry(evt) {
    this.setState({ country: evt.target.value });
  }

  handleChangePercentDistributionOfToken(evt) {
    this.setState({ percent_distribution_of_token: evt.target.value });
  }

  handleChangePricePerToken(evt) {
    this.setState({ price_per_token: evt.target.value });
  }

  handleChangeLinks(link, evt) {
    console.log(link, evt.target.value);
    switch (link) {
      case "company_website_link":
        this.setState({ company_website_link: evt.target.value });
        break;
      case "whitepaper_link":
        this.setState({ whitepaper_link: evt.target.value });
        break;
      case "bitcoin_talk_link":
        this.setState({ bitcoin_talk_link: evt.target.value });
        break;
      case "bounty_campaign_link":
        this.setState({ bounty_campaign_link: evt.target.value });
        break;
      case "medium_link":
        this.setState({ medium_link: evt.target.value });
        break;
      case "twitter_link":
        this.setState({ twitter_link: evt.target.value });
        break;
      case "facebook_link":
        this.setState({ facebook_link: evt.target.value });
        break;
      case "telegram_link":
        this.setState({ telegram_link: evt.target.value });
        break;
      case "youtube_link":
        this.setState({ youtube_link: evt.target.value });
        break;
      case "github_link":
        this.setState({ github_link: evt.target.value });
        break;
      case "linkedin_link":
        this.setState({ linkedin_link: evt.target.value });
        break;
    }
  }

  handleImageDrop(url) {
    this.setState({ img_url: url });
  }

  handleSubmit() {
    // const categories = this.state.categories.split(',')
    console.log({ ...this.state });
    fetch(`http://${this.props.baseURL}/publish/ico`, {
      method: "POST",
      body: JSON.stringify({ ...this.state }),
      headers: {
        "Content-Type": "application/json",
        SESSIONID: this.props.session_id
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.result) {
          this.handleNext();
          console.log(res.message);
        } else {
          console.error(res.message);
        }
      });
  }

  handleChangeCheckbox(category) {
    console.log(category);
    let fetched_categories = this.state.fetched_categories;
    let cat_set = new Set(this.state.categories);
    if (fetched_categories[category] === false) {
      cat_set.add(category);
      fetched_categories[category] = true;
    } else {
      cat_set.delete(category);
      fetched_categories[category] = false;
    }
    this.setState({
      categories: [...cat_set],
      fetched_categories: fetched_categories
    });
    console.log([...cat_set], fetched_categories);
  }

  handelDeleteCategoryFromChip(category) {
    let fetched_categories = this.state.fetched_categories;
    fetched_categories.category = false;
    let cat_set = new Set(this.state.categories);
    cat_set.delete(category);
    this.setState({
      categories: [...cat_set],
      fetched_categories: fetched_categories
    });
  }

  render() {
    const categoriesActions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseDialog}
      />
    ];

    const categories = Object.keys(this.state.fetched_categories);

    return (
      <div id="publish">
        <div className="heading">
          <h1>Publish Your ICO</h1>
          <div className="line" />
          <div className="space" />
        </div>
        <MuiThemeProvider>
          <div className="panel">
            <div className="xyz">
              <Stepper
                activeStep={this.state.activeStep}
                orientation="vertical"
              >
                <Step key="General Information" className="step">
                  <StepLabel>General Information</StepLabel>
                  <StepContent>
                    <TextField
                      hintText="eg. Bitcoin"
                      floatingLabelText="Ico Name"
                      value={this.state.ico_name}
                      onChange={this.handleChangeIcoName}
                    />
                    <br />
                    <div className="customfield">
                      <ControlLabel className="controllabel">
                        ICO Image <span>(80X80px)</span>
                      </ControlLabel>
                      <Upload
                        action={this.handleImageDrop}
                        url={this.state.img_url}
                      />
                    </div>
                    <TextField
                      floatingLabelText="Short Description"
                      hintText="eg. Decentralized P2P Lending Platform"
                      multiLine={true}
                      rows={1}
                      value={this.state.short_description}
                      onChange={this.handleChangeShortDescription}
                    />
                    <br />
                    <TextField
                      floatingLabelText="Country"
                      hintText="eg. India"
                      margin="normal"
                      value={this.state.country}
                      onChange={this.handleChangeCountry}
                    />
                    <br />
                    <TextField
                      floatingLabelText="Percent Distribution of Token"
                      hintText=""
                      value={this.state.percent_distribution_of_token}
                      onChange={this.handleChangePercentDistributionOfToken}
                    />
                    <br />
                    <TextField
                      floatingLabelText="Price Per Token"
                      hintText=""
                      value={this.state.price_per_token}
                      onChange={this.handleChangePricePerToken}
                    />
                    <br />
                    <div>
                      <FlatButton disabled={true} label="Back" />
                      <RaisedButton
                        primary={true}
                        onClick={this.handleNext}
                        label="Next"
                      />
                    </div>
                  </StepContent>
                </Step>
                <Step key="Other Information" className="step">
                  <StepLabel>Other Information</StepLabel>
                  <StepContent>
                    <br />
                    {this.state.categories.length ? (
                      <div>
                        <div className="chip-wrapper">
                          {this.state.categories.map((category, i) => (
                            <Chip
                              key={category}
                              onRequestDelete={() =>
                                this.handelDeleteCategoryFromChip(category)
                              }
                              style={{ margin: "4px" }}
                            >
                              {category}
                            </Chip>
                          ))}
                        </div>
                        <br />
                      </div>
                    ) : (
                      <span />
                    )}
                    <RaisedButton
                      label="Select Categories"
                      onClick={this.handleOpenDialog}
                    />
                    <Dialog
                      contentClassName="dialogContent"
                      bodyClassName="dialogBody"
                      title="Select Categories"
                      actions={categoriesActions}
                      modal={false}
                      open={this.state.categoryDialogOpen}
                      onRequestClose={this.handleCloseDialog}
                      autoScrollBodyContent={true}
                    >
                      {categories.length ? (
                        categories.map((category, i) => (
                          <Col
                            className="categories"
                            key={i}
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                          >
                            <Checkbox
                              label={category}
                              checked={this.state.fetched_categories[category]}
                              onCheck={() =>
                                this.handleChangeCheckbox(category)
                              }
                              style={{ marginBottom: "16px" }}
                            />
                          </Col>
                        ))
                      ) : (
                        <h3>Not Found</h3>
                      )}
                    </Dialog>
                    <br />
                    <br />
                    <DateTimePicker
                      floatingLabelText="Start Date"
                      onChange={this.handleChangeStartDate}
                      DatePicker={DatePickerDialog}
                      TimePicker={TimePickerDialog}
                    />
                    <DateTimePicker
                      floatingLabelText="Close Date"
                      onChange={this.handleChangeCloseDate}
                      DatePicker={DatePickerDialog}
                      TimePicker={TimePickerDialog}
                    />
                    <TextField
                      floatingLabelText="Description"
                      hintText="eg. Decentralized P2P Lending Platform"
                      multiLine={true}
                      rows={1}
                      value={this.state.description}
                      onChange={this.handelChangeDescription}
                    />
                    <br />
                    <div>
                      <FlatButton onClick={this.handleBack} label="Back" />
                      <RaisedButton
                        primary={true}
                        onClick={this.handleNext}
                        label="Next"
                      />
                    </div>
                  </StepContent>
                </Step>
                <Step key="Social Media and other Links" className="step">
                  <StepLabel>Social Media and other Links</StepLabel>
                  <StepContent>
                    <TextField
                      floatingLabelText="Company Website Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.company_website_link}
                      onChange={evt =>
                        this.handleChangeLinks("company_website_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="White Paper Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.whitepaper_link}
                      onChange={evt =>
                        this.handleChangeLinks("whitepaper_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Bitcoin Talk Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.bitcoin_talk_link}
                      onChange={evt =>
                        this.handleChangeLinks("bitcoin_talk_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Medium Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.medium_link}
                      onChange={evt =>
                        this.handleChangeLinks("medium_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Twitter Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.twitter_link}
                      onChange={evt =>
                        this.handleChangeLinks("twitter_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Facebook Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.facebook_link}
                      onChange={evt =>
                        this.handleChangeLinks("facebook_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Telegram Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.telegram_link}
                      onChange={evt =>
                        this.handleChangeLinks("telegram_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Youtube Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.youtube_link}
                      onChange={evt =>
                        this.handleChangeLinks("youtube_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Github Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.github_link}
                      onChange={evt =>
                        this.handleChangeLinks("github_link", evt)
                      }
                    />
                    <br />
                    <TextField
                      floatingLabelText="Linkedin Link"
                      multiLine={true}
                      rows={1}
                      value={this.state.linkedin_link}
                      onChange={evt =>
                        this.handleChangeLinks("linkedin_link", evt)
                      }
                    />
                    <br />
                    <div>
                      <FlatButton onClick={this.handleBack} label="Back" />
                      <RaisedButton
                        primary={true}
                        onClick={this.handleSubmit}
                        label="Submit"
                      />
                    </div>
                  </StepContent>
                </Step>
              </Stepper>

              {this.state.activeStep === 3 && (
                <Paper zDepth={4}>
                  Your Ico Has been submiited
                  <FlatButton onClick={this.handleReset} label="Home" />
                </Paper>
              )}
              <br />
              <br />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Publish);
