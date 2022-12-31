import Icon from "./images/profile.jpg";
import bg from "./images/body-wave2.png";
import resume from "./files/Resume Saqib Ali.pdf";
import React, { useEffect } from "react";

function SectionCard() {
  const Jobs = [
    "Frontend Engineering",
    "Backend Engineering",
    "DevOps Engineering",
    "Design Services"
  ];

  let bubbles = [];

  const addBubbles = () => {
    for (let i = 0; i < 50; i++) {
      bubbles.push(<div class="bubble"></div>);
    }
    return bubbles;
  };

  useEffect(() => {
    document
      .getElementById("dev")
      .addEventListener("animationiteration", () => {
        let element = document.getElementById("dev");
        let job = element.innerText;
        let index = (Jobs.indexOf(job) + 1) % Jobs.length;
        document.getElementById("dev").innerText = Jobs[index];
      });

    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        document.getElementById("navbar").className = "trans";
      } else if (window.scrollY > 50) {
        document.getElementById("navbar").className = "nav-scrolling";
      }
    });
  }, []);

  return (
    <>
      <div class="main">
        {/* <img data-aos="zoom-out-up" style={{ "z-index": "1300" }} src={Icon} /> */}
        <div class="bubble-container">
          <div class="bubble-wrap">{addBubbles()}</div>
        </div>

        <div id="two" class="main-img">
          {/* <img
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
          /> */}
          <h1 data-aos="fade-down">
            WebWork
            <br />
            <p class="aspire" data-aos="fade-down">
              <div id="dev">{Jobs[0]}</div>
            </p>
          </h1>
          <p data-aos="fade-down">
            At WebWork, our mission is to help businesses reach their potential
            by providing a simple service to design and create modern websites.
          </p>
          <div class="section-container-btns">
            <div data-aos="zoom-in-right">
              <a href="mailto:webwork.devs@gmail.com" class="mail">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="bottom-oval"></div> */}
    </>
  );
}

export default SectionCard;
