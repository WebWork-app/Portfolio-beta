import React, { useEffect, useState } from "react";
import data_structures from "./images/data_structures_algorithms.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { shazilr, saqiba } from './images';

import { Grid1x2Fill } from "react-bootstrap-icons";
import ReactPlayer from "react-player/lazy";
import GithubLink from "./helperComponents/githubLink";
import ProjectLink from "./helperComponents/projectLink";


function AboutUs() {
  return (
    <div>
<h2 id="aboutUsFont" class="slider-header" data-aos="fade-up">Meet the Team<hr /> </h2>
<h3>Led by some of Canada's brightest young minds, our team of developers and designers are here to help you build your ideal website. Get to know the people inspiring the next wave of creativity at WebWorks:</h3>

<div class="row center">
  <div class="column">
    <div class="card">
      <img src={shazilr} alt="Shazil" height="365" style={{width: '100%'}}>
      </img>  
      <div class="container">
        <h2>Shazil R.</h2>
        <p class="title">CEO & Founder</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={saqiba} alt="Saqib" height="365" style={{width: '100%'}}></img>
      <div class="container">
        <h2>Saqib A.</h2>
        <p class="title">Director of Technology</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/images/aribh.jpg" alt="Arib" style={{width: '100%'}}>

      </img>
      <div class="container">
        <h2>Arib H.</h2>
        <p class="title">Director of Technology</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/images/sufyana.jpg" alt="Sufyan" style={{width: '100%'}}>

      </img>
      <div class="container">
        <h2>Sufyan A.</h2>
        <p class="title">Director of Design and Marketing</p>
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

export default AboutUs;
