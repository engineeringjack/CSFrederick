import logo from "../components/images/404Logo.png";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

const Lost = () => {
  const [DataHed, setDataHed] = useState("Project Failure");
  const [Dataapi, setDataapi] = useState(
    "If this message doesn't go away our servers may be having issues."
  );
  async function apiTest() {
    try {
      const response = await fetch("http://api.csfrederick.com/data/100700")
        .catch((err) => {
          setDataHed("Internal Server Error");
          setDataapi("We are having issues with our servers. Try again later.");
        })
        .then((response) => {
          if (response.ok)
            setDataapi("Our servers look good, requested page does not exist.");
        });
      console.log(response);
    } catch (err) {
      setDataHed("Internal Server Error");
      setDataapi("We are having issues with our servers. Try again later.");
    }
  }
  useEffect(() => {
    apiTest();
  }, []);
  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
        <Helmet>
          <title>Unknown Destination</title>
          <meta
            name="Unknown Destination"
            content="This page is no longer available."
            description="This page is no longer available."
            author="Jack Frederick"
          />
        </Helmet>
      </HelmetProvider>
      <Warning></Warning>
      <Navbar></Navbar>
      <header className="Home">
        <img src={logo} className="logo" alt="logo" />
        <p className="Homethick">{DataHed}</p>
        <p className="Homemid">You are outside the realm of the known.</p>
        <p className="Homesmall">
          Error 404 has been detected. Check your spelling and try again.
        </p>
        <p className="Homesmall">{Dataapi}</p>
        <br></br>
      </header>
      <Footer></Footer>
    </div>
  );
};

export default Lost;
