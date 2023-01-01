import React from "react";
import { Calendar2, GeoAltFill, BriefcaseFill } from "react-bootstrap-icons";

import { ford, opentext, cgi, wework, primer, kenna, extreme, swiftlabs, blackline, d2l, orange, arcticwolf } from './images';
import wave4 from "./images/wave4.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import bg from "./images/body-wave2.png";

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

const Experience = () => {
  const employers =
  {
    "Ford": ford,
    "OpenText": opentext,
    "CGI": cgi,
    "Primer": primer,
    "WeWork": wework,
    "Kenna": kenna,
    "Extreme Networks": extreme,
    "Swift Labs": swiftlabs,
    "Blackline Safety": blackline,
    "D2L": d2l,
    "Orange": orange,
    "Arctic Wolf": arcticwolf
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <img src={wave4} class="top-wave" alt="Experience" />
      <div id="three" class="project-section">
        <h2 class="slider-header" data-acs="fade-up"> 
          Clients
          <hr />
        </h2>

        <div class="all-companies">
          {Object.values(employers).map((e, i) => {
            return (
              <div
                id={"company-container-" + i}
                class="company-container"
                style={{ width: "100px" }}
              >
                <img
                  class="company"
                  src={e}
                  data-aos="zoom-in"
                  data-aos-delay={i*100}
                  alt="company"
                />
              </div>
            );
          })}
        </div>
      
      </div>
    </div>
  );
}

export default Experience;
