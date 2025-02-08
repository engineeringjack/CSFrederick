import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div className="footPush">
        <div className="photoSpacer"></div>
        <div className="Footer">
          <p style={{ textAlign: "center" }} className="bold">
            Jack Frederick
          </p>
            <p className="footColB">
              This site is home made and self hosted.
            </p>
            <div className="photoSpacer"></div>
          </div>
        </div>
    );
  }
}

export default footer;
