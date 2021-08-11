import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import SectionCard from "./components/sectionCard";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Slider from "./components/slider";
import Footer from "./components/footer";
import "./App.css";
import "./scss/styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <SectionCard />
      <Slider />
      <br />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
