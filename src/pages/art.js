import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CustomImage from "../components/CustomImage";

const Art = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const coverArtImages = importAll(
    require.context(
      "../components/images/Art/coverArt",
      false,
      /\.(png|jpe?g|svg)$/
    )
  ).sort((a, b) => b.localeCompare(a));

  function generateImageGrid(images) {
    return (
      <div className="bigGrid">
        {images.map((image, index) => {
          const imageName = image.split("/").pop().split(".")[0];
          const title = imageName.replace(/^\d+\s*/, "").trim();

          return (
            <div key={index} className="image-container">
              <a href={`/portfolio?art=${imageName}`}>
                <CustomImage
                  src={image}
                  className="coverArt"
                  alt={`Art Cover ${index + 1}`}
                />
                <div className="overlay-text">{`${title}`}</div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  // Main component
  function CoverArtGallery() {
    return (
      <div>
        {generateImageGrid(coverArtImages)}
        <br />
      </div>
    );
  }
  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
        <Helmet>
          <title>Art Portfolio</title>
          <meta
            name="All my art, shoved into a single page."
            content="Street, sport, portrait, and product photography. Oh, and some 3D art."
            description="Street, sport, portrait, and product photography. Oh, and some 3D art."
            author="Jack Frederick"
            image="%PUBLIC_URL%/favcon.ico"
          />
        </Helmet>
      </HelmetProvider>
      <Warning></Warning>
      <Navbar></Navbar>
      <header className="Home">
        <br></br>
        <div className="screenBox Minsize">
          <p className="Homethick">Just a Peek of my Art</p>
          <p className="Homemid">
            Street, sport, portrait, and product photography. Oh, and some 3D
            art.
          </p>
          <br></br>
          <div>
            <a
              className="bold ats butWid"
              style={{ color: "black" }}
              href="/portfolio?art=2%20Exibition%20Special"
            >
              Exhibition Works
            </a>
            <a
              className="bold ats butWid"
              style={{ color: "black" }}
              href="/lookup"
            >
              Media Lookup Code
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="bigGrid">{CoverArtGallery()}</div>
          <br></br>
          <br></br>
          <br></br>
          <p className="Homesmall">
            Some folders are still being migrated, please wait to view other
            content.
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
};
export default Art;
