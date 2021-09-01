import React, { useEffect, useState } from "react";
import ps5 from "./files/ps5-project.mp4";
import snake from "./files/snake.mp4";
import portfolio from "./files/project-online.mp4";
import qalculater from "./files/qalculater.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ReactPlayer from "react-player/file";
import GithubLink from "./helperComponents/githubLink";
import ProjectLink from "./helperComponents/projectLink";

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
function Project() {
  const projects = [
    {
      "Sorting Visualizer": [
        ps5,
        <>
          Developed an interactive front-end which provides a clean interface to
          launch games Implemented core functionality to launch, hide, sort,
          remove games using Python scripts UI styling and interactivity was
          implemented using Kodi Incorporated the Xinput api to report
          information regarding controllers in UI The skin can be viewed here:
          Play Station 5 Skin
        </>,
        "Sorting-Visualizer",
        "2021",
      ],
    },
    {
      "PS5 UI for Windows!": [
        ps5,
        <>
          Developed an interactive front-end which provides a clean interface to
          launch games Implemented core functionality to launch, hide, sort,
          remove games using <b>Python scripts</b> UI styling and interactivity
          was implemented using Kodi Incorporated the Xinput api to report
          information regarding controllers in UI The skin can be viewed here:
          Play Station 5 Skin
        </>,
        "Playstation-5-windows",
        "2021",
      ],
    },
    {
      Qalculater: [
        qalculater,
        <>
          This app removes my reliance on sticky notes and efficiently tracks my
          academic progress. UI Interactivity was implemented using the{" "}
          <b>React framework</b> and styling using <b>SASS</b>. Implemented the
          backend using Java and Spring boot which handles front-end requests.
          The time taken to record a single entry,
          <br />
          <b>Without app: </b>26s
          <br /> <b>With app: </b>9s
          <br />
          i.e. a time reduction of 65%.
        </>,
        "Qalculater",
        "2021",
      ],
    },
    {
      "Snake Game": [
        snake,
        <>
          Built a clone of the classic addictive game: Snake. Implemented core
          game logic and visuals using <b>C++</b>. Incorporated fundamental OOP
          principles like
          <i> Inheritance, </i>
          <i>Abstraction, </i>
          <i>Encapsulation </i>
          to provide a clear modular structure
        </>,
        "",
        "2020",
      ],
    },
    {
      "Online Portfolio": [
        portfolio,
        <>
          I enjoy front-end development, creating good looking UI and UX. I
          created this responsive website using <b>React</b> which introduces
          me, my interests, projects, work experiences and much more!
        </>,
        "Online-Portfolio",
        "2019 - 2021",
      ],
    },
  ];
  const links = {
    "Sorting Visualizer": "https://sort-app.netlify.app/",
    "PS5 UI for Windows!": "https://youtu.be/SHyACovTXSE",
    Qalculater: "https://qalculater.netlify.app/login",
    "Snake Game": "",
    "Online Portfolio": "https://saqibali.ca",
  };
  const [repo, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SaqibA1i/repos")
      .then((response) => {
        response.json().then((data) => {
          let repositories = [];
          // push the visible / existing repos to
          data.map((entry) => {
            repositories.push(entry["name"]);
          });
          setRepos([...repositories]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      id="four"
      class="project-section back"
      style={{ "background-color": "transparent" }}
    >
      <h2
        data-aos="fade-up"
        class="slider-header"
        style={{ "background-color": "transparent" }}
      >
        Projects
        <hr />
      </h2>
      <div class="projects" style={{ "max-width": "1200px", margin: "0 auto" }}>
        <div class="all-companies">
          {projects.map((project, index) => {
            return (
              <div
                id={"company-container-" + index}
                class="company-container"
                style={{
                  width: "auto",
                  height: "0px",
                  backgroundColor: "tansparent",
                  color: "#333",
                }}
                onClick={() => {
                  document
                    .getElementsByClassName("control-dots")[1]
                    .getElementsByClassName("dot")
                    [index].click();
                }}
              >
                <a class="main-btn" style={{ fontSize: "10px" }}>
                  <p class="center">{Object.entries(project)[0][0]}</p>
                </a>
              </div>
            );
          })}
        </div>
        <Carousel width="inherit" {...getConfigurableProps()}>
          {projects.map((project) => {
            return (
              <>
                <div class="single" style={{ paddingTop: "0px" }}>
                  <ReactPlayer
                    id="player"
                    loop={true}
                    playing={true}
                    url={Object.entries(project)[0][1][0]}
                    muted={true}
                    data-aos="fade-right"
                  />
                  <div class="project-info">
                    <h3 data-aos="fade-left">
                      {Object.entries(project)[0][0]}
                      <b class="project-tag">
                        {Object.entries(project)[0][1][3]}
                      </b>
                    </h3>
                    <br />
                    <p data-aos="fade-left">
                      {Object.entries(project)[0][1][1]}
                    </p>
                    <div class="links">
                      <GithubLink project={project} repo={repo} />
                      <ProjectLink
                        link={links}
                        projectName={Object.entries(project)[0][0]}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Project;
