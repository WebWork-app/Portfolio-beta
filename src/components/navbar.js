import React, { useEffect, useState } from "react";

import {
  HouseDoorFill,
  PersonBadge,
  BriefcaseFill,
  BookFill,
  Mailbox,
  Mailbox2,
} from "react-bootstrap-icons";
function Navbar() {
  return (
    <nav id="navbar" class="trans">
      <div class="nav-left">SA</div>
      <ul class="nav-right">
        <a href="#two">
          <li data-aos="fade-down">
            <span>About</span>
          </li>
        </a>
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
      </ul>
    </nav>
  );
}

export default Navbar;
