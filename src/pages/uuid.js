import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

const Photo = () => {
  const [DataHed, setDataHed] = useState("Loading");
  const [DataInc, setDataInc] = useState(
    "Grabbing some data from our servers."
  );
  console.log(DataInc);
  const [DataIncT, setDataIncT] = useState("...");

  async function getData() {
    try {
      let elementList = "\n";
      const queryParameters = new URLSearchParams(window.location.search);
      const id = queryParameters.get("uuid");
      const response = await fetch("https://api.csfrederick.com/uuid/" + id, {
        mode: "cors",
      });
      const data = await response.json();
      var xtemp = 0;
      for (const value of data) {
        xtemp += 1;
        setDataHed("Grabbing: (" + xtemp + " of " + data.length + ")");
        const tempD = await fetch(
          "https://api.csfrederick.com/data/" + value[0],
          {
            mode: "cors",
          }
        );
        const tempData = await tempD.json();
        elementList = (
          <div>
            {elementList}

            <a href={"/photo?id=" + value[0]} className="white">
              <u>{tempData[value[0]]["headerData"]}</u>
            </a>
            <div class="photoSpacer"></div>
            <div className="uuidMode">
              <div className="uuidMode-col uuid-img">
                <img
                  src={"https://api.csfrederick.com/image/" + value[0]}
                  className="Person-logo-sm"
                  alt=""
                />
                <br></br>
              </div>
              <div className="uuidMode-col">
                <p className="Homemid">
                  Includes: {tempData[value[0]]["includes"]}
                </p>
                <p className="Homemid">
                  When: {tempData[value[0]]["timeDate"]}
                </p>
                <p className="Homemid">
                  Location: {tempData[value[0]]["location"]}
                </p>
                <p className="Homemid">
                  Format: {tempData[value[0]]["format"]}
                </p>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      }
      setDataHed(elementList);
      setDataInc("Includes: " + data[id]["includes"]);
      setDataIncT("Includes: " + data[id]["includes"]);
    } catch (err) {
      //window.location.href = "/404";
      //setDataHed("FAILED");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  var shown = true;
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("uuid");
  var updateableText =
    "Keep your user ID safe, as anyone with it can view this page. Click this message to show.";
  const [updateData, setUpdate] = useState(updateableText);
  function handleClick() {
    if (shown) {
      updateableText =
        "Keep your user ID safe, as anyone with it can view this page. Your ID is: " +
        id +
        ".";
      setUpdate(String(updateableText));
      shown = false;
    } else {
      updateableText =
        "Keep your ID safe, as anyone with it can view this page. Click this message to show.";
      setUpdate(String(updateableText));
      shown = true;
    }
  }
  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
        <Helmet>
          <title>Polaroid of {DataIncT}</title>
          <meta
            name="Polaroid Timeline"
            content="A canvas of just you, and some friends."
            description="A canvas of just you, and some friends."
            author="Jack Frederick"
          />
        </Helmet>
      </HelmetProvider>
      <Warning></Warning>
      <Navbar></Navbar>
      <header className="Home">
        <div class="photoSpacer"></div>
        <div className="screenBox">
          <p className="Homethick-sm">
            Keep your user ID safe, as anyone with it can view this page.
          </p>
          <p className="Homethick-sm"> </p>
          <hr></hr>
          <p className="Homethick">{DataHed}</p>
          <div class="photoSpacer"></div>
        </div>
        <br></br>

        <p className="Homesmall">
          Images are not available without the picture's ID or the physical
          image tag.
        </p>

        <p className="Homesmall" onClick={handleClick}>
          {updateData}
        </p>

        <p className="Homemini">
          If you have any conserns with your picture or if there is incorect
          data shown above, contact me to get it resolved.
        </p>
        <div class="photoSpacer"></div>
      </header>
      <div class="photoSpacer"></div>
      <Footer></Footer>
    </div>
  );
};

export default Photo;
