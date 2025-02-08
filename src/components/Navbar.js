import React, { Component } from "react";

class navbar extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <div className="leftHead">
            <p>JACK FREDERICK</p>
          </div>
          <div>
            <div className="rowHead headlimit">
              <div
                className="columnHead Homemid"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <a href="/">HOME</a>
              </div>
              <div
                className="columnHead Homemid"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <a href="/art">ART</a>
              </div>
              <div
                className="columnHead Homemid"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <a href="/resume">RESUME</a>
              </div>
              <div
                className="columnHead Homemid"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <a href="/lookup">MEDIA CODE</a>
              </div>
              <div
                className="columnHead Homemid"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <a href="/contact">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
