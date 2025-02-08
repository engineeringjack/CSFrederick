import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Lost = () => {
  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
        <Helmet>
          <title>Server Requested</title>
          <meta
            name="Server Notice"
            content="Reaching a Server Process Incorrectly"
            description="A server you are trying to reach was not configured correctly."
            author="Jack Frederick"
          />
        </Helmet>
      </HelmetProvider>
      <Warning></Warning>
      <Navbar></Navbar>
      <header className="Home">
        <p className="Homethick">
          Server Destination was Incorrectly Configured
        </p>
        <br></br>
        <p className="Homethick-sm">
          Your address may have been correctly entered. However this address is
          reserved for processes to use it for direct communication with our
          server.
        </p>
        <p className="Homesmall">
          Please enter the previous page into the server configuration page of
          the software you are trying to use.
        </p>
        <br></br>
        <br></br>
        <a className="Homesmall ats" style={{ color: "black" }} href="/">
          Go Back Home
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
};

export default Lost;
