import React, { Component } from "react";
import { Image, Button, Box } from "grommet";
import { signup } from "./UserFunctions";

export default class Activity extends Component {
  render() {
    const activityDetails = [
      {
        imageSrc:
          "https://www.shape.com.sg/wp-content/uploads/2020/04/Free-Online-Yoga-Classes-That-Are-Totally-Worth-Trying-According-to-a-Yoga-Studio-Addict-e1586323618519.jpg",
        title: "Yoga Class",
        schedule: "   Monday 1900-2100, Wednesday 1900-2100",
        description: "   Kent Ridge Yoga Studio",
        points: 60,
      },
      {
        imageSrc:
          "https://specials-images.forbesimg.com/imageserve/1076946904/960x0.jpg?fit=scale",
        title: "Pilates Class",
        schedule: "   Tuesday 2000-2200, Thursday 2000-2200",
        description: "   Kent Ridge Pilates Studio",
        points: 50,
      },
      {
        imageSrc: "https://zula.sg/wp-content/uploads/2019/06/spin-class-4.jpg",
        title: "Spin Class",
        schedule: "   Wednesday 1900-2100, Friday 1900-2100",
        description: "   Kent Ridge Spin Studio",
        points: 50,
      },
    ];

    return (
      <div className="item">
        {activityDetails.map((activity) => (
          <React.Fragment>
            <div className="image">
              <Image
                height="100%"
                width="100%"
                fit="contain"
                src={activity.imageSrc}
              />
            </div>
            <div className="middle aligned content">
              <Box background="#62546a" margin="small" align="center">
                <div className="header">
                  <h3 style={h3Style}>{activity.title}</h3>
                </div>
              </Box>
              <div className="schedule">
                <Image
                  src="https://www.iconsdb.com/icons/preview/purple/calendar-11-xxl.png"
                  height="20px"
                />
                <a> {activity.schedule} </a>
              </div>
              <div className="description">
                <Image
                  src="https://www.pngkit.com/png/full/19-199442_location-map-pin-purple10-location-pin-purple.png"
                  height="25px"
                />
                <a href="https://www.google.com/maps/place/Kent+Ridge+Guild+House/@1.2933547,103.7643008,15z/data=!3m1!4b1!4m5!3m4!1s0x31da1aff3180ff15:0x30333e2509c25a6e!8m2!3d1.2933333!4d103.7730556">
                  {activity.description}
                </a>
              </div>

              <div className="points">
                <Image
                  src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-shadow-vol-3/512/Award_winner_star_ribbon_medal_prize-512.png"
                  height="20px"
                />
                <b>{` ${activity.points} points`}</b>
              </div>
              <div className="signup">
                <Button
                  primary
                  label="Sign up now!"
                  fill="true"
                  color="#664b78"
                  size="medium"
                  onClick={() => signup(activity.title)}
                />
              </div>
            </div>
            <pre></pre>
            <hr class="solid"></hr>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const h3Style = {
  fontWeight: "bold",
  fontSize: "22px",
};
