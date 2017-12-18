import React, { Component } from "react";
import { Tab, Grid } from "react-bootstrap";

import IcoList from "../components/IcoList";
import Team from "../components/Team";
import Main from "../components/Main";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trending: [],
      upcoming: [],
      ongoing: [],
      recent: [],
      team: [],
      tab: 3
    };

    this.handleTab = this.handleTab.bind(this);
    this.getTeamData = this.getTeamData.bind(this);
    this.onSetTab = this.onSetTab.bind(this);
  }

  sendRequest(filter) {
    fetch(`http://${this.props.baseURL}/get/ico`, {
      method: "POST",
      body: JSON.stringify({ filter }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        switch (filter) {
          case "TRENDING":
            this.setState({ trending: res.list });
            break;
          case "UPCOMING":
            this.setState({ upcoming: res.list });
            break;
          case "ONGOING":
            this.setState({ ongoing: res.list });
            break;
          case "RECENT":
            this.setState({ recent: res.list });
            break;
          default:
            console.error("Invalid choice");
            break;
        }
      });
  }

  handleTab(tab) {
    switch (tab) {
      case 1:
        this.sendRequest("TRENDING");
        break;
      case 2:
        this.sendRequest("UPCOMING");
        break;
      case 3:
        this.sendRequest("ONGOING");
        break;
      case 4:
        this.sendRequest("RECENT");
        break;
      default:
        console.error("Invalid choice");
        break;
    }
  }

  getTeamData() {
    fetch(`http://${this.props.baseURL}/admin/get/team/members`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ team: res.members });
      });
  }

  componentDidMount() {
    this.handleTab(this.state.tab);
    this.getTeamData();
  }

  onSetTab(tab) {
    this.setState({ tab });
    this.handleTab(tab);
  }

  render() {
    return (
      <div>
        <Main onSelectTab={this.onSetTab} />
        <Grid>
          <Tab.Container id="tabs-ico" activeKey={this.state.tab}>
            <Tab.Content animation>
              <Tab.Pane eventKey={1}>
                <IcoList title="Trending" data={this.state.trending} />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <IcoList title="Upcoming" data={this.state.upcoming} />
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
                <IcoList title="Ongoing" data={this.state.ongoing} />
              </Tab.Pane>
              <Tab.Pane eventKey={4}>
                <IcoList title="Recent" data={this.state.recent} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Grid>
        <div>
          <Team data={this.state.team} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
