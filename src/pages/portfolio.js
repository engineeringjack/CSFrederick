// Import statements remain the same
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Modal from "../components/Modal";
import CustomImage from "../components/CustomImage";

const Art = () => {
  const [images, setImages] = useState([]);
  const [subtitle, setSubtitle] = useState([]);
  const [, setModalImage] = useState(null); // It works don't touch it
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const queryParameters = new URLSearchParams(window.location.search);
  var id = queryParameters.get("art");
  id = id.replace(/%20/g, " ");
  const title = id.replace(/^\d+\s*/, "").trim();

  async function getImagePaths() {
    const queryParameters = new URLSearchParams(window.location.search);
    var id = queryParameters.get("art");
    const rawid = id.replace(" ", "%20");
    const paths = await fetch("https://api.csfrederick.com/art/" + rawid, {
      mode: "cors",
    });
    var allPaths = [];

    var working = String(await paths.json()).split(",");
    console.log("Length " + working.length);
    for (let i = 0; i < working.length - 1; i++) {
      if (working[i] !== "text.txt") {
        console.log("/Art/" + id + "/" + working[i]);
        allPaths.push("/Art/" + id + "/" + working[i]);
      }
    }
    const subtitle = working[working.length - 1];
    console.log(subtitle);
    return [allPaths, subtitle];
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        var allPaths = [];
        var subtitleload = "";
        [allPaths, subtitleload] = await getImagePaths(); // Wait for the promise to resolve
        setImages(allPaths); // Update the state with the fetched image paths
        setSubtitle(subtitleload);
      } catch (error) {
        console.error("Error fetching image paths:", error); // Handle errors
      }
    };

    fetchImages(); // Call the async function
  }, [id]); // Depend on id to refetch when it changes

  const openModal = (index) => {
    setModalImage(images[index]);
    setCurrentImageIndex(index); // Track the index of the currently displayed image
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalImage(null); // Clear the image when closing
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scroll is enabled on component unmount
    };
  }, [modalVisible]);

  return (
    <div className="App" style={{ margin: "-8px" }}>
      <HelmetProvider>
        <Helmet>
          <title>Artwork Series: {title}</title>
          <meta
            name="Artwork by Month"
            content="Artwork by category and month."
            description="Artwork by category and month."
            author="Jack Frederick"
          />
        </Helmet>
      </HelmetProvider>
      <Warning />
      <Navbar />
      <header className="Home">
        <br />
        <div className="screenBox Minsize">
          <p className="Homethick">{title}</p>
          <p className="Homemid">{subtitle}</p>
          <br />
          <br />
          <br />
          <div className="bigGrid">
            {images.map((image, index) => (
              <div
                key={index}
                className="image-container"
                onClick={() => openModal(index)}
              >
                <CustomImage
                  src={image}
                  className="fullArt"
                  alt={`Art ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <div className="photoSpacer"></div>
          <div className="photoSpacer"></div>
        </div>
      </header>
      <Footer />
      {/* Render the Modal conditionally */}
      {modalVisible && (
        <Modal
          images={images}
          currentImageIndex={currentImageIndex} // Pass the index of the current image
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Art;
