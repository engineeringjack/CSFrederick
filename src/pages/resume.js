import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
            <title>Jack Frederick - Resume</title>
            <meta
              name="Jack Frederick - Resume"
              content="MST Student Seeking Computer Science"
              description="MST Student Seeking Computer Science"
              author="Jack Frederick"
            />
          </Helmet>
        </HelmetProvider>
        <Warning></Warning>
        <Navbar></Navbar>
        <header className="Home">
          <br></br>
          <br></br>
          <a
            className="bold ats rightGap"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/engineeringjack"
          >
            &nbsp;Check &nbsp;GitHub&nbsp;
          </a>
          <a
            className="bold ats"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ehHUp5FfUPC5-e7rRKA62Nf3JewkME3K/view"
          >
            ATS Friendly PDF
          </a>
          <div className="screenBox Minsize">
            <p className="Homethick">Resume</p>
            <p className="Homemid">Computer Science @ MS&T - Freshman</p>
            <p className="Homemid">
              Email: jrfpk4@mst.edu
              <br />
              Phone +1(816)447-6405
              <br />
              Home: Kansas City, MO
            </p>
            <p className="Homemid clingTop">Personal Summery</p>
            <p className="Homesmall clingBottom">
              An excited and forward-looking student eager to expand knowledge
              of computer science. Seeking opportunities to collaborate with
              others and continue learning in the ever-evolving world of
              technology
            </p>
            <br></br>
            <p className="Homemid bold left">&emsp;&emsp;&emsp;EDUCATION</p>
            <p className="Homemid left clingTop">
              Missouri University of Science and Technology
            </p>
            <p className="Homesmall left clingBottom">
              Bachelor of Science, Computer Science | Rolla, Missouri | April
              2024 - May 2028
            </p>
            <p className="Homemid left">High School Graduation Diploma</p>
            <p className="Homesmall left">
              Académie Lafayette International High School | Kansas City,
              Missouri | Graduated in 2024
            </p>
            <br></br>
            <p className="Homemid bold left">
              &emsp;&emsp;&emsp;CERTIFICATIONS
            </p>
            <p className="Homemid left clingTop">Eagle Scout</p>
            <p className="Homesmall left clingBottom">
              Eagle Scouts achieve the highest possible rank in Boy Scouts by
              leading and executing community service projects and by
              participating in many other service projects. Eagle Scouts
              achieved this goal by learning teamwork, leadership, time
              management, and project execution.
            </p>
            <p className="Homemid left clingTop">
              Nvidia Fundamentals of Deep Learning
            </p>
            <p className="Homesmall left clingBottom">
              Dedicated to understanding how artificial intelligence deep
              learning is used. Their limitations and shortcomings are important
              in understanding the scope in which AI models can be used. The
              other aspect of this certification requires an understanding of
              how to train and use models to complete tasks.
              <br />
              <a href="https://learn.nvidia.com/certificates?id=u_RopD5VTnO1zcSmfv8IoA">
                Verify the certificate here.
              </a>
            </p>
            <p className="Homemid left clingTop">
              Bilingual International Baccalaureate
            </p>
            <p className="Homesmall left clingBottom">
              Acquired the bilingual International Baccalaureate certificate for
              rigorous courses.
            </p>
            <br></br>
            <p className="Homemid bold left">&emsp;&emsp;&emsp;EXPERIENCE</p>
            <p className="Homemid left clingTop">Warehouse Associate</p>
            <p className="Homesmall left clingBottom">
              Jan 2022 - Dec 2023 | Greentech Renewables, Kansas City, Kansas
              <br />
              Responsible for inventory management, operating machinery, and
              fulfilling order requests. Frequently handled technical repairs
              around the warehouse, including extending internet coverage across
              the building. Additionally, ensure the accuracy of incoming and
              outgoing shipments by carefully inspecting and verifying order
              details to meet fulfillment and shipping standards.
            </p>
            <br></br>
            <p className="Homemid bold left">&emsp;&emsp;&emsp;PROJECTS</p>
            <p className="Homemid left clingTop">
              ALIHS Theater Department Audio / Visuals Lead
            </p>
            <p className="Homesmall left clingBottom">
              Lead a group of people to work together in AV for our theater
              performances two years in a row. I created a program to work with
              our equipment to automatically run and play cues.
            </p>
            <p className="Homemid left clingTop">
              Micro-Drone Racing - MindDrive
            </p>
            <p className="Homesmall left clingBottom">
              Built and Soldered FPV micro-drones to be raced at competitive
              competitions around the Kansas City area. Raced FPV micro-drones
              at competitions.
            </p>
            <br></br>
            <p className="Homemid bold left">&emsp;&emsp;&emsp;SKILLS</p>
            <p className="Homesmall left">
              Biliteracy in French
              <br />
              Soldering and Electronics Repair
              <br />
              Theater Audio and Visuals Technician
              <br />
              Systems Server Upkeep
              <br />
              Languages: ReactJS, Java, Python, JavaScript, HTML/CSS, Lua
              <br />
              Applications: Git, Github, SSH, Microsoft Suite, Google Suite,
              Google Admin Suite, Adobe Suites
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
