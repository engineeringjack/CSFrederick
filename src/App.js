import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lost from "./pages/lost";
import Home from "./pages/index";
import Lookup from "./pages/lookup";
import Photo from "./pages/photo";
import UUID from "./pages/uuid";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Art from "./pages/art";
import Contact from "./pages/contact";
import Servers from "./pages/servers";
import ReactGA from "react-ga4";

ReactGA.initialize("G-RXE1N1HFKS");

const App = () => {
  if (
    !["www", "csfrederick", "localhost:3000"].includes(
      window.location.host.split(".")[0]
    )
  ) {
    if (window.location.host.split(".")[1] === "localhost:3000") {
      window.location.href = "http://localhost:3000/server";
    } else {
      window.location.href = "https://csfrederick.com/server";
    }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookup" element={<Lookup />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/uuid" element={<UUID />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/server" element={<Servers />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </Router>
  );
};

export default App;
