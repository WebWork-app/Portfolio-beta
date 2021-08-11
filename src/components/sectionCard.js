import React, { useEffect, useState } from "react";
import Icon from "./images/profile.jpg";
import bg from "./images/body-wave2.png";
import bg2 from "./images/flow.png";
import resume from "./files/Resume 2A.docx.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

function SectionCard() {
  window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
      document.getElementById("navbar").className = "trans";
    } else if (window.scrollY > 50) {
      document.getElementById("navbar").className = "nav-scrolling";
    }
  });
  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div class="main">
        <img data-aos="zoom-out-up" style={{ "z-index": "1300" }} src={Icon} />
        <div id="two" class="main-img">
          <img
            id="image1"
            class="top-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              top: 0,
              transform: "rotate(0)",
            }}
          />
          <img
            id="image2"
            class="bottom-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              bottom: 0,
            }}
          />
          <img
            id="image3"
            class="bottom-img"
            src={bg}
            style={{
              "max-width": "200%",
              width: "200%",
              position: "absolute",
              bottom: 0,
            }}
          />
          <h1 data-aos="fade-down">
            I Am Saqib Ali
            <br />
            <p class="aspire" data-aos="fade-down">
              <i>An Aspiring Software Engineer</i>
            </p>
          </h1>
          <p data-aos="fade-down" data-aos-anchor-placement="top-bottom">
            A student of computer engineering with a strong passion for software
            development and solid industry experience. If you are looking to
            hire, please contact me here:
          </p>
          <div class="section-container-btns">
            <div data-aos="zoom-in-right">
              <a href="mailto:saqibalip321@gmail.com" class="mail">
                Email Me
              </a>
            </div>
            <div data-aos="zoom-in-left">
              <a
                class="resume"
                href={resume}
                type="application/pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-oval"></div>
    </>
  );
}

export default SectionCard;
