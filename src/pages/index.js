import "../App.css";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ReactTyped } from "react-typed";

const Home = () => {
  const phrases = [
    "Proactive MST student in search of new knowledge studying computer science.",
    "Active GoDot game developer working with a team of artists.",
    "Combat Robotics Media Lead for MST.",
    "React developer who wrote this website.",
    "Artist and Photographer.",
  ];
  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
      <Helmet>
        <title>Complete Portfolio</title>
        <meta
          name="Jack Frederick, Complete Portfolio"
          content="A fully self made, and self hosted portfolio site."
          data-react-helmet="true"
          description="A fully self made, and self hosted portfolio site."
          author="Jack Frederick"
        />
      </Helmet>
      </HelmetProvider>
      <Warning></Warning>
      <header className="Home">
        <br></br>
        <div className="screenBox Minsize">
          <p className="Homethick pushdownindex">Jack Frederick</p>
          <p className="Homemid">
            <ReactTyped
              strings={phrases}
              typeSpeed={40}
              backDelay={1000}
              loop
            ></ReactTyped>
          </p>
          <br></br>
          <a
            className="Homesmall ats"
            style={{ color: "black" }}
            href="/resume"
          >
            Resume and Programming
          </a>
          <br></br>
          <br></br>
          <br></br>
          <a className="Homesmall ats" style={{ color: "black" }} href="/art">
            Art and Design
          </a>
          <br></br>
          <br></br>
          <p className="Homesmall">
            This site is completely hand made, and self hosted by me.
          </p>
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
};

export default Home;
