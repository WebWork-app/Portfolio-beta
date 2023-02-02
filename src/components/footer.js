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
            <Linkedin
              onClick={() => {
                window.open("https://linkedin.com/in/webwork-developers");
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
