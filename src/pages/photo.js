import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Modal from "../components/Modal";

const Photo = () => {
  const [DataHed, setDataHed] = useState("Loading");
  const [DataInc, setDataInc] = useState("Getting some data from our servers.");
  const [DataIncT, setDataIncT] = useState("...");
  const [DataDay, setDataDay] = useState(" ");
  const [DataLoc, setDataLoc] = useState("This should only take a moment.");
  const [DataFrm, setDataFrm] = useState("");
  const [DataNot, setDataNot] = useState("");
  const [DataImg, setDataImg] = useState("");
  const [LoadState, setLoadState] = useState("loadingMode");
  const [modalVisible, setModalVisible] = useState(false);

  async function getData() {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const id = queryParameters.get("id");
      const response = await fetch("https://api.csfrederick.com/data/" + id, {
        mode: "cors",
      });
      const data = await response.json();
      const imgData = await fetch("https://api.csfrederick.com/image/" + id, {
        mode: "no-cors",
      });
      await imgData.blob();
      setDataImg("https://api.csfrederick.com/image/" + id);
      setLoadState("loadedMode");
      setDataHed("" + data[id]["headerData"]);
      setDataInc("Includes: " + data[id]["includes"]);
      setDataIncT("Includes: " + data[id]["includes"]);
      setDataDay("Taken on: " + data[id]["timeDate"]);
      setDataLoc("Taken at: " + data[id]["location"]);
      setDataFrm("Format: " + data[id]["format"]);
      setDataNot("" + data[id]["notice"]);
    } catch (err) {
      setDataHed("FAILED");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const openModal = () => {
    console.log("Test")
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  var shown = true;
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  var updateableText =
    "Keep your ID safe, as anyone with it can view this page. Click this message to show.";
  const [updateData, setUpdate] = useState(updateableText);

  function handleClick() {
    if (shown) {
      updateableText =
        "Keep your ID safe, as anyone with it can view this page. Your ID is: " +
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
          <title>Polaroid of {DataHed}</title>
          <meta
            name="Polaroid Photo"
            content="A canvas of a single moment."
            description="A canvas of a single moment."
            author="Jack Frederick"
          />
        </Helmet>
      </HelmetProvider>
      <Warning />
      <Navbar />
      <header className="Home">
        <div className="photoSpacer"></div>
        <div className="screenBox">
          <div className="Person-bright">
            <div className={"container " + LoadState}>
              <div className="dash uno"></div>
              <div className="dash dos"></div>
              <div className="dash tres"></div>
              <div className="dash cuatro"></div>
            </div>
            <img
              src={DataImg}
              className="Person-logo"
              alt=""
              onClick={openModal}
              style={{ cursor: "pointer" }} // Add click event to open modal
            />
          </div>
          <p className="Homethick">{DataHed}</p>
          <p className="Homemid">{DataInc}</p>
          <p className="Homemid">{DataDay}</p>
          <p className="Homemid">{DataLoc}</p>
          <p className="Homemid">{DataFrm}</p>
          <p className="Homemid">{DataNot}</p>
          <div className="photoSpacer"></div>
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
          If you have any concerns with your picture or if there is incorrect
          data shown above, contact me to get it resolved.
        </p>
      </header>
      <div className="photoSpacer"></div>
      <div className="photoSpacer"></div>
      <Footer />
      {modalVisible && (
        <Modal
          images={[DataImg]} // Use DataImg as the single image in an array
          currentImageIndex={0} // Index is 0 since it's a single image
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Photo;
