import React, { useEffect, useState } from "react";

import {
  HouseDoorFill,
  PersonBadge,
  BriefcaseFill,
  BookFill,
  Mailbox,
  Mailbox2,
} from "react-bootstrap-icons";

import Logo from "./images/logo.png";

function Navbar() {
  // THE MOVING EYE
  // document.addEventListener("mousemove", (event) => {
  //   let x = event.clientX;
  //   let y = event.clientY;
  //   const tgt = event.target;
  //   const computed = window.getComputedStyle(tgt)["cursor"];
  //   if (computed == "pointer") {
  //     document.getElementById("eye-pupil").style.width = "11px";
  //     document.getElementById("eye-pupil").style.height = "11px";
  //     document.getElementById("nav-eye").style.height = "35px";
  //     document.getElementById("nav-eye").style.animation = "none";
  //   } else {
  //     document.getElementById("eye-pupil").style.width = "7px";
  //     document.getElementById("eye-pupil").style.height = "7px";

  //     document.getElementById("nav-eye").style.animation =
  //       "eye 2s infinite alternate-reverse";
  //   }
  //   // get viewport width
  //   document.getElementById("eye-pupil").style.left =
  //     (30 * x) / window.innerWidth + "px";

  //   // get viewport height
  //   document.getElementById("eye-pupil").style.top =
  //     (20 * y) / window.innerHeight + "px";
  // });
  return (
    <nav id="navbar" class="trans">
      <div class="nav-left">
        <img src={Logo} />
      </div>
      {/* <div id="nav-eye" class="nav-eye">
        <div id="eye-pupil" class="eye-pupil"></div>
      </div> */}
      <ul class="nav-right">
        <a href="#three">
          <li data-aos="fade-down" data-aos-delay="50">
            <span>Experience</span>
          </li>
        </a>
        <a href="#four">
          <li data-aos="fade-down" data-aos-delay="100">
            <span>Projects</span>
          </li>
        </a>
        <a href="#five">
          <li data-aos="fade-down">
            <span>Team</span>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
