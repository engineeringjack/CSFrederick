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
          <title>Get in Touch</title>
          <meta
            name="Get in Touch; Jack Frederick"
            content="Contact Information"
            description="Contact Information"
            author="Jack Frederick"
          />
        </Helmet>
        </HelmetProvider>
        <Warning></Warning>
        <Navbar></Navbar>
        <header className="Home">
          <br></br>
          <div className="screenBox Minsize">
            <p className="Homethick">Contact</p>
            <p className="Homemid">Feel free to reach out!</p>
            <br></br>
            <p className="Homemid bold clingTop">I'm an employer:</p>
            <p className="Homesmall clingTop clingBottom">
              I want to reach out about a potential job offer.
            </p>
            <p className="Homesmall clingBottom">
              Email: jrfpk4@mst.edu
              <br />
              Phone number: +1(816)447-6405
            </p>
            <br></br>
            <p className="Homemid bold clingTop">Media Code Inquiries:</p>
            <p className="Homesmall clingTop clingBottom">
              I have questions on content I may be apart of.
            </p>
            <p className="Homesmall clingBottom">
              Email: thechillengers@gmail.com
              <br />
              Phone number: +1(816)447-6405
              <br />
            </p>
            <br></br>
            <p className="Homemid bold clingTop">Bug Reports:</p>
            <p className="Homesmall clingTop clingBottom">
              I found a bug with one of your services.
            </p>
            <p className="Homesmall clingBottom">
              Email: thechillengers@gmail.com
              <br />
              Phone number: +1(816)447-6405
              <br />
            </p>
            <br></br>
            <br></br>
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
