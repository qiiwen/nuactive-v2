import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      points: "",
      classes: "",
      rewards: "",
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email,
      points: decoded.identity.points,
      classes: decoded.identity.classes,
      rewards: decoded.identity.rewards,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={jumbotronStyle}>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={h1Style}>
              PROFILE
            </h1>
            <pre></pre>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name: </td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name: </td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email: </td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Points: </td>
                <td>{this.state.points}</td>
              </tr>
              <tr>
                <td>Classes: </td>
                <td>{this.state.classes}</td>
              </tr>
              <tr>
                <td>Rewards: </td>
                <td>{this.state.rewards}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const jumbotronStyle = {
  background: "#F2EEF9",
};

const h1Style = {
  color: "#410543",
  fontSize: "50px",
};

export default Profile;
