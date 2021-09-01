import React, { useEffect, useState } from "react";
import { ArrowBarLeft, ArrowBarRight, Calendar2 } from "react-bootstrap-icons";
import opentext from "./images/opentext.png";
import wework from "./images/WeWork.png";
import cgi from "./images/cgi.png";
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
  swipeScrollTolerance: 100,
  preventMovementUntilSwipeScrollTolerance: true,
});

function Experience() {
  const experiences = [
    {
      CGI: [
        cgi,
        <>Developer</>,
        <>May 2021 - August 2021</>,
        <>
          <li>
            <span>
              Spearheaded the research and integration of the Deck tool in a
              Jenkins CICD pipeline to streamline and secure changes made to the{" "}
              <em>Kong Api Gateway</em>.
            </span>
          </li>
          <li>
            <span>
              Developed <em>python scripts</em> to automate the warehousing of
              EFK logs.
            </span>
          </li>
          <li>
            <span>
              Leveraged knowledge in <em>Java</em>, <em>Springboot</em> to add
              user context to a web application by using interceptors and
              deploying the app via <em>Docker</em>. The app was accessed
              through a reverse proxy integrated with the Keycloack IDP.
            </span>
          </li>
          <li>
            <span>
              Created a <em>ExpressJS</em> application that scrapes metrics from
              the Keycloack IDP and outputs a 200 / 500 http response based on
              custom health checks
            </span>
          </li>
        </>,
      ],
    },
    {
      "Open Text": [
        opentext,
        <>Software Developer</>,
        <>Sept 2020 - Dec 2020</>,
        <>
          <li>
            <span>
              Co-developed a responsive website to showcase proprietary company
              icons and optimize the UXD team’s workflow
            </span>
          </li>
          <li>
            <span>
              Lead the development of an admin screen to upload, delete and edit
              icons utilizing <em>React</em>, <em>Java</em> and{" "}
              <em>Spring boot</em>
            </span>
          </li>
          <li>
            <span>
              Structured the backend of the admin site using <em>Java</em> and{" "}
              <em>Spring boot</em> to interact with Gitlab’s api to store the
              icons
            </span>
          </li>
          <li>
            <span>
              Implemented build automation using <em>Team City</em> to run
              scripts for further manipulation of icons as part of <em>CICD</em>
              . Icons were pushed to artifactory and published as an npm package
              to provide programmatic access
            </span>
          </li>
          <li>
            <span>
              Developed a CSS library following company’s design principles
              using <em>SASS</em>. A static website was developed using React to
              showcase the developed components which were WCAG compliant
            </span>
          </li>
          <li>
            <span>
              Integrated react-date-picker with company’s case management
              front-end and wrote unit tests using <em>Enzyme</em>
            </span>
          </li>
        </>,
      ],
    },
    {
      "We Work": [
        wework,
        <>Software Engineering Intern</>,
        <>Jan 2020 - April 2020</>,
        <>
          <li>
            <span>
              Identified, documented and reported bugs along with other issues
              within the software database of Propaganda Gold. This required
              quickly getting familiar with new technologies such as{" "}
              <em>Git</em>, <em>Amazon Web Services</em>, <em>Vue</em>,{" "}
              <em>Node JS</em>, <em>CLI</em>
            </span>
          </li>
          <li>
            <span>
              Took initiative to develop a <em>Restful API</em> demo for the
              purpose of uploading user profile pictures. User's information on
              a back-end created using Node and <em>MongoDB</em> with the front
              end being Vue.
            </span>
          </li>
          <li>
            <span>
              The successful completion of the user demo allowed me to upload
              videos and images for user posts which was greatly appreciated by
              the team.
            </span>
          </li>
          <li>
            <span>
              Demonstrated responsibility and initiative to develop the front
              end of the social media app along with the lead engineer. This
              involved coding the front end in Vue and understanding the backend
              in <em>JS</em> and <em>C++</em>.
            </span>
          </li>
          <li>
            <span>
              I was able to port over the front end web application demo from
              Angular to Vue in order to meet project needs. This was greatly
              appreciated and acknowledged by the team.
            </span>
          </li>
        </>,
      ],
    },
  ];
  useEffect(() => {}, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <img src={wave4} class="top-wave" />
      <div id="three" class="project-section">
        <h2 class="slider-header" data-aos="fade-up">
          Experience
          <hr />
        </h2>
        {
          // Making a section with over view of all companies
        }
        <div class="all-companies">
          {experiences.map((project, index) => {
            return (
              <div
                id={"company-container-" + index}
                class="company-container"
                style={{ width: "100px" }}
                onClick={() => {
                  document
                    .getElementsByClassName("control-dots")[0]
                    .getElementsByClassName("dot")
                    [index].click();
                }}
              >
                <img
                  class="company"
                  src={Object.entries(project)[0][1][0]}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                />
              </div>
            );
          })}
        </div>
        <div
          class="projects"
          style={{ "max-width": "1200px", margin: "0 auto" }}
        >
          <Carousel width="inherit" {...getConfigurableProps()}>
            {experiences.map((project) => {
              return (
                <>
                  <div class="single">
                    <div class="left">
                      <img
                        class="first"
                        src={Object.entries(project)[0][1][0]}
                        data-aos="fade-right"
                      />
                      <h3 data-aos="fade-right" data-aos-delay="60">
                        {Object.entries(project)[0][1][1]}
                        <h5 data-aos-delay="120">
                          <Calendar2 />{" "}
                          <i>{Object.entries(project)[0][1][2]}</i>
                        </h5>
                      </h3>
                    </div>
                    <div
                      data-aos="fade-left"
                      class="project-info project-info-greater"
                    >
                      <ul>{Object.entries(project)[0][1][3]}</ul>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Experience;
