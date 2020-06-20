import React, { Component } from "react";
import { Box } from "grommet";

class Activities extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={jumbotronStyle}>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={h1Style}>
              ACTIVITIES
            </h1>
          </div>
        </div>
        <Box pad="large" background="#F2EEF9" style={boxStyle}>
          <p class="para" style={paraStyle}>
            classesssss
          </p>
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

export default Activities;
