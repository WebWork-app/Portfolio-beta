import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import Before from "../components/images/Before.png";
import After from "../components/images/After.png";
import { PersonCircle } from "react-bootstrap-icons";
const FIRST_IMAGE = {
  imageUrl: Before,
};
const SECOND_IMAGE = {
  imageUrl: After,
};

const BeforeAfter = () => {
  return (
    <div id="three" class="project-section">
      <h2 class="slider-header" data-acs="fade-up">
        Before / After
        <hr />
      </h2>
      <div className="beforeAfter">
        <ReactBeforeSliderComponent
          firstImage={SECOND_IMAGE}
          secondImage={FIRST_IMAGE}
          delimiterColor={"#f2cf00"}
        />
        <div className="testimonial">
          {/* <PersonCircle size={40} color={"grey"} /> */}
          <div className="text">
            <p className="header">
              Sounds too good to be true, but it really does work that way
            </p>
            <p className="name">Saqib Ali, Co-founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
