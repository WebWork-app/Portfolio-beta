import React, { useEffect, useState } from "react";
import { Youtube, Github, Linkedin } from "react-bootstrap-icons";
import footer from "./images/footer.png";
import bubble from "./images/bubble.png";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="footer-content">
          <div class="footer-icons">
            <Youtube
              onClick={() => {
                window.location.href =
                  "https://www.youtube.com/channel/UChbV48W0We8mOFe50MJeKIQ";
              }}
              class="footer-icon"
              size={30}
            />
            <Github
              onClick={() => {
                window.location.href =
                  "https://github.com/SaqibA1i?tab=repositories";
              }}
              class="footer-icon"
              size={30}
            />
            <Linkedin
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/saqib-ali-25b2aa213/";
              }}
              class="footer-icon"
              size={30}
            />
          </div>
          <div class="footer-bottom">
            <p>WebWork</p>
          </div>
          <p className="right">2022 WebWork. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
