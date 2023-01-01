import React, { useEffect, useState } from "react";
import data_structures from "./images/data_structures_algorithms.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { shazilr, saqiba } from "./images";

import { Grid1x2Fill } from "react-bootstrap-icons";
import ReactPlayer from "react-player/lazy";
import GithubLink from "./helperComponents/githubLink";
import ProjectLink from "./helperComponents/projectLink";

function AboutUs() {
  return (
    <div id="five">
      <h2 id="aboutUsFont" class="slider-header" data-aos="fade-up">
        Meet the Team
        <hr />{" "}
      </h2>
      <h3 class="aos-init aos-animate" className="aboutUsSub">
        Led by some of Canada's brightest young minds, our team of
        <i> developers</i> and <i>designers,</i> are here to help you build your
        ideal website. Get to know the people inspiring the next wave of{" "}
        <i>creativity</i> at WebWorks:
        <div className="image"></div>
      </h3>

      <div class="row center">
        <div class="column">
          <div class="card">
            <img
              src={shazilr}
              alt="Shazil"
              style={{ width: "100%", height: "50%" }}
            ></img>
            <div class="container">
              <h2>Shazil R.</h2>
              <p class="title">
                CEO & Co-founder <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src={saqiba}
              alt="Saqib"
              height="365"
              style={{ width: "100%", height: "50%" }}
            ></img>
            <div class="container">
              <h2>Saqib A.</h2>
              <p class="title">Co-founder & Director of Technology</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="/images/aribh.jpg"
              alt="Arib"
              style={{ width: "100%", height: "50%" }}
            ></img>
            <div class="container">
              <h2>Arib H.</h2>
              <p class="title">Co-founder & Director of Technology</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="/images/sufyana.jpg"
              alt="Sufyan"
              style={{ width: "100%", height: "50%" }}
            ></img>
            <div class="container">
              <h2>Sufyan A.</h2>
              <p class="title">Co-founder & Director of Design and Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
