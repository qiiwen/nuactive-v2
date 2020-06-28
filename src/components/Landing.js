import React, { Component } from "react";
import { Box, Carousel, Image } from "grommet";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={jumbotronStyle}>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={h1Style}>
              WELCOME
            </h1>
          </div>
        </div>
        <Box>
          <Image
            fit="cover"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66d441fa-f638-40da-aa99-096700a7ab25/de09ic2-4073a486-66e0-4a4a-b119-29ff550ceb44.png/v1/fill/w_1195,h_668,q_70,strp/screenshot_2020_06_28_at_9_16_55_pm_by_elicialzy_de09ic2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MTYiLCJwYXRoIjoiXC9mXC82NmQ0NDFmYS1mNjM4LTQwZGEtYWE5OS0wOTY3MDBhN2FiMjVcL2RlMDlpYzItNDA3M2E0ODYtNjZlMC00YTRhLWIxMTktMjlmZjU1MGNlYjQ0LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.XaPamnP3W_-bETNvVRJb-hL0Vqgcbb1V9k0St6S5TnM"
            width="100%"
          />
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
  font: "50px",
};

export default Landing;
