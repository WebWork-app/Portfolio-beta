import React, { useEffect, useState } from "react";
import data_structures from "./images/data_structures_algorithms.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Grid1x2Fill } from "react-bootstrap-icons";
import ReactPlayer from "react-player/lazy";
import GithubLink from "./helperComponents/githubLink";
import ProjectLink from "./helperComponents/projectLink";

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  axis: "horizontal",
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: false,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  thumbWidth: 200,
  selectedItem: 0,
  interval: 100000,
  transitionTime: 300,
  swipeScrollTolerance: 50,
  preventMovementUntilSwipeScrollTolerance: true,
});
function StatsCombined() {
  return (
    <div class="block">
      <h2 class="expcount item">
        12 <b>+</b>
        <br />
        <div className="text">Companies</div>
      </h2>
      <h2 class="expcount item">
        5 <b>+</b>
        <br />
        <div className="text">Years of Experience</div>
      </h2>
      <h2 class="expcount item">
        25 <b>+</b>
        <br />
        <div className="text">Completed Projects</div>
      </h2>
    </div>
  );
}

export default StatsCombined;
