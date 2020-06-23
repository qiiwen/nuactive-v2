import React, { Component } from "react";
import { Image, Button } from "grommet";
import { signup } from "./UserFunctions";

export default class Activity extends Component {
  render() {
    const activityDetails = [
      {
        imageSrc:
          "https://www.shape.com.sg/wp-content/uploads/2020/04/Free-Online-Yoga-Classes-That-Are-Totally-Worth-Trying-According-to-a-Yoga-Studio-Addict-e1586323618519.jpg",
        title: "Yoga, Sat Jun 6 2020",
        description: "Yoga studio",
        points: 60,
      },
      {
        imageSrc:
          "https://specials-images.forbesimg.com/imageserve/1076946904/960x0.jpg?fit=scale",
        title: "Pilates, Sun Jun 7 2020",
        description: "Pilates studio",
        points: 50,
      },
      {
        imageSrc: "https://zula.sg/wp-content/uploads/2019/06/spin-class-4.jpg",
        title: "Spin Class, Sun Jun 7 2020",
        description: "Spin studio",
        points: 50,
      },
    ];

    return (
      <div className="item">
        {activityDetails.map((activity) => (
          <React.Fragment>
            <div className="image">
              <Image fit="contain" src={activity.imageSrc} />
            </div>
            <div className="middle aligned content">
              <div className="header">
                <b>{activity.title}</b>
              </div>
              <div className="description">
                <a href="#">{activity.description}</a>
                <p>{`Sign up with your friends to earn ${activity.points} points per class!`}</p>
              </div>
              <div className="signup">
                <Button
                  primary
                  label="Sign up"
                  onClick={() => signup(activity.title)}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
