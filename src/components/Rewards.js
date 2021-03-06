import React, { Component } from "react";
import { Box } from "grommet";
import Reward from "./RewardsList";

class Rewards extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={jumbotronStyle}>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={h1Style}>
              REWARDS
            </h1>
          </div>
        </div>
        <Box pad="large" background="#F2EEF9" style={boxStyle}>
          <div className="items">
            <Reward />
          </div>
        </Box>
      </div>
    );
  }
}

const jumbotronStyle = {
  background: "#410543",
};

const h1Style = {
  color: "white",
};

const boxStyle = {
  padding: "10px",
};

const paraStyle = {
  padding: "10px",
  margin: "10px 20px 10px 20px",
  fontSize: "17px",
  text: "align",
  textAlign: "justify",
};

export default Rewards;
