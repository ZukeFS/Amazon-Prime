import React, { Component, Fragment } from "react";
import "./HomeComponent.styles.css";
import { Link } from "react-router-dom";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let homePageStyles = {
      "background-color": "#000",
      "background-image":
        "linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
      "background-position": "right top",
      height: "67vh",
      width: "100%",
      backgroundRepeat: "no-repeat"
    };

    return (
      <Fragment>
        {/* container start here */}
        <section className="mainBlock" style={homePageStyles}>
            <div className="left">
              <h1 className="" style={{color: "white", paddingTop: "100px", paddingLeft: "75px"}}>Welcome to prime video</h1>
              <p style={{color: "white", paddingLeft: "75px", paddingTop: "10px", familyWeight: "lighter", fontSize: "larger"}}>
                Join Prime to watch the latest movies, TV shows and
                award<br />winning Amazon Originals
              </p>
              <div className="link">
              <Link to="/register" style={{boxSizing: "border-box", color: "white", padding: "15px 30px 15px 30px", backgroundColor: "#0f79af", borderRadius: "4px", textDecoration: "none"}}>Start your 30-day free trial</Link>
              </div>
            </div>
            <div className="right">
              <img src="bg.jpg" alt="" />
            </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;
