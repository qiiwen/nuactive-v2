import React, { Component } from "react";
import { Image, Button, Box } from "grommet";
import { redeem } from "./UserFunctions";

export default class Reward extends Component {
  render() {
    const rewardsDetails = [
      {
        imageSrc:
          "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/FP2-1024x576.jpg",
        location: "   Frontier (Faculty of Science)",
        map:
          "https://www.google.com/maps/place/NUS+Science+Canteen+(Frontier)/@1.2966888,103.7805219,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1a50d2a84f95:0x10368845ce4e2bb0!8m2!3d1.2966888!4d103.7805219",
        description: "   10% cashback",
        redemption: 100,
      },
      {
        imageSrc:
          "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/The-Tea-Party-Edited-1024x684.jpg",
        location: "   The Tea Party (University Sports Centre)",
        map:
          "https://www.google.com/maps/place/The+Tea+Party+Nus/@1.2993474,103.7752766,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1a5807f4d967:0xed436b48b907d036!8m2!3d1.2993474!4d103.7752766",
        description: "   10% cashback",
        redemption: 100,
      },
      {
        imageSrc: "https://cdn01.vulcanpost.com/wp-uploads/2017/09/tcr-nus.jpg",
        location: "   The Coffee Roaster (Blk AS8)",
        map:
          "https://www.google.com/maps/place/The+Coffee+Roaster+Cafe+@+NUS/@1.295979,103.7720608,17z/data=!3m1!4b1!4m5!3m4!1s0x31da191343eb5b27:0x7376be4260096121!8m2!3d1.295979!4d103.7720608",
        description: "   8% cashback",
        redemption: 80,
      },
      {
        imageSrc:
          "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2019/03/Spinelli-EA.jpg",
        location: "   Spinelli Coffee Company (Engineering Block EA)",
        map:
          "https://www.google.com/maps/place/Spinelli+Coffee+Company+-+National+University+of+Singapore+2/@1.2972062,103.7689918,15z/data=!3m1!4b1!4m5!3m4!1s0x31da1a57a5e7f729:0x17cb8bba499bfc18!8m2!3d1.2971848!4d103.7777466",
        description: "   8% cashback",
        redemption: 80,
      },
      {
        imageSrc:
          "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2020/01/Maxx-Coffee-1024x684.jpg",
        location: "  Maxx Coffee (Central Library)",
        map:
          "https://www.google.com/maps/place/Maxx+Coffee/@1.2968601,103.7644953,15z/data=!3m1!4b1!4m5!3m4!1s0x31da1bc7429e6767:0x31507181ee5f9c7d!8m2!3d1.2968387!4d103.7732501",
        description: "   8% cashback",
        redemption: 80,
      },
    ];

    return (
      <div className="item">
        {rewardsDetails.map((rewards) => (
          <React.Fragment>
            <div className="image">
              <Image
                height="100%"
                width="100%"
                fit="contain"
                src={rewards.imageSrc}
              />
            </div>
            <div className="middle aligned content">
              <pre></pre>
              <div className="location">
                <Image
                  src="https://www.pngkit.com/png/full/19-199442_location-map-pin-purple10-location-pin-purple.png"
                  height="25px"
                />
                <a href={rewards.map}>{rewards.location}</a>
              </div>

              <div className="description">
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo3-04-512.png"
                  height="20px"
                />
                <a>{rewards.description}</a>
              </div>

              <div className="points">
                <Image
                  src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-shadow-vol-3/512/Award_winner_star_ribbon_medal_prize-512.png"
                  height="20px"
                />
                <a>{` ${rewards.redemption} points to redeem`}</a>
              </div>
              <div className="signup">
                <Button
                  primary
                  label="Redeem your cashback now!"
                  fill="true"
                  color="#664b78"
                  size="medium"
                  onClick={() => redeem(rewards.location)}
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
