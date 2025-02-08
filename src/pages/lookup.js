import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      enterTxt: "Enter",
      exForm: "",
      index: 2,
      sentences: ["######", "X##XXXX", "GXX##X", "WEB##X"],
    };
  }
  static defaultProps = {
    updateableText: "Submit",
    classButton: "",
  };
  async handleClick() {
    var data;
    var type;
    try {
      const response = await fetch(
        "https://api.csfrederick.com/data/" + this.state.inputValue,
        { mode: "cors" }
      );
      data = await response.json();
      type = 1;
    } catch (err) {
      try {
        const response = await fetch(
          "https://api.csfrederick.com/uuid/" + this.state.inputValue,
          { mode: "cors" }
        );
        data = await response.json();
        type = 2;
      } catch (err) {
        data = "ID doesn't exist!";
      }
    }
    if (data === "ID doesn't exist!") {
      this.setState({ enterTxt: "Try again", exForm: "Fail" });
    } else {
      if (type === 1) {
        window.location.href = "/photo?id=" + this.state.inputValue;
      } else {
        window.location.href = "/uuid?uuid=" + this.state.inputValue;
      }
    }
  }

  render() {
    return (
      <div className="App" style={{ margin: "-8px" }}>
        <HelmetProvider>
        <Helmet>
          <title>Project and Media Lookup</title>
          <meta
            name="Project and Media Lookup"
            content="Find Polaroids you're in and projects you have special access to."
            description="Find Polaroids you're in and projects you have special access to."
            author="Jack Frederick"
          />
        </Helmet>
        </HelmetProvider>
        <Warning></Warning>
        <Navbar></Navbar>
        <header className="Home">
          <br></br>
          <div className="screenBox Minsize">
            <p className="Homethick">Project Lookup</p>
            <p className="Homemid">Enter your 6 character lookup ID:</p>
            <div>
              <p className="Homesmall">
                Find Polaroids you're in and projects you have special access
                to.
              </p>
            </div>
            <div>
              <input
                name="lookupID"
                id="lookupID"
                type="text"
                maxLength="6"
                placeholder="XXXXXX"
                value={this.state.inputValue}
                onChange={(evt) => this.updateInputValue(evt)}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    this.handleClick();
                  }
                }}
              />
            </div>
            <br></br>
            <br></br>
            <button
              type="submit"
              className={"SubmitButton " + this.state.exForm}
              onClick={async () => {
                await this.handleClick();
              }}
            >
              {this.state.enterTxt}
            </button>
            <br></br>
            <div className="photoSpacer"></div>
            <div className="photoSpacer"></div>
          </div>
        </header>
        <Footer></Footer>
      </div>
    );
  }
  updateInputValue(evt) {
    const val = evt.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    this.setState({
      inputValue: val,
    });
  }
}
export default App;
