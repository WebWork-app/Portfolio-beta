import React, { useEffect, useState } from "react";
import ps5 from "./files/ps5-project.mp4";
import snake from "./images/snake.png";
import portfolio from "./files/project-online.mp4";
import qalculater from "./files/qalculater.mp4";
import FlappyBird from "./images/flappyBird.jpg";
import Sorting from "./files/Sorting.mp4";

import qalc from "./files/qalculater.mp4";
import laptop from "./images/laptop.png";
import phone from "./images/smartphone.png";
import data_structures from "./images/data_structures_algorithms.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Grid1x2Fill } from "react-bootstrap-icons";
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
  swipeScrollTolerance: 50,
  preventMovementUntilSwipeScrollTolerance: true,
});
function Project() {
  const projects = [
    {
      "Sorting Visualizer": [
        Sorting, // video or image
        <>
          Developed a clean web interface to visualize the progress of some
          famous sorting algorithms. Incorporated Merge Sort, Quick Sort and
          Bubble Sort. Added sliders for the purposes of manipulating array size
          and sorting speed.
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> React, TypeScript
        </>,
        "Sorting-Visualizer", // github link
        "2021",
        false, // is mobile?
        false, // is image?
      ],
    },
    {
      "Grades Tracker Web App": [
        qalculater,
        <>
          This app removes my reliance on sticky notes and efficiently tracks my
          academic progress. UI Interactivity was implemented using the{" "}
          <b>React framework</b> and styling using <b>SASS</b>. Implemented the
          backend using ExpressJS. <b>Without app: </b>26s <b>With app: </b>9s
          i.e. a time reduction of 65%.
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> React, SASS, MongoDB, PassportJS,
          ExpressJS
        </>,
        "Qalculater",
        "2021",
        true,
        false,
      ],
    },
    {
      "Data Structures and Algorithms": [
        data_structures,
        <>
          Custom Implementations of some famous <b>Data Structures</b> and{" "}
          <b>Algorithms</b> in C++
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> C++, OOP principles
        </>,
        "Data-Structures-and-Algorithms",
        "2021",
        false,
        true,
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
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> Python, Kodi
        </>,
        "Playstation-5-windows",
        "2021",
        false,
        false,
      ],
    },
    {
      "Online Portfolio": [
        portfolio,
        <>
          I enjoy front-end development, creating good looking UI and UX. I
          created this website which introduces me, my interests, projects, work
          experiences and much more!
          <br />
          <b>How it was: </b>{" "}
          <a class="ahref" href="https://saqibfirstsite.netlify.app">
            saqibfirstsite.netlify.app
          </a>
          <br />
          <b>How its going: </b>{" "}
          <a class="ahref" href="https://saqibali.ca">
            saqibali.ca
          </a>
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> React, SASS
        </>,
        "Online-Portfolio",
        "2019 - 2021",
        false,
        false,
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
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> C++, OOP principles
        </>,
        "",
        "2020",
        false,
        true,
      ],
    },
    {
      "Flappy Bird Android Game": [
        FlappyBird,
        <>
          Built a clone of the addictive side-scroller game: Flappy bird.
          Implemented core game logic and sounds using Java, Android studio and
          LibGdx. An infinite loop was implemented which would update the screen
          every 16.66ms i.e. 60 fps and all logic such as collision detection
          and scores were updated within this loop.
          <hr class="seperate-up-down" />
          <b class="purple">Utilized: </b> Java, LibGDX, Android Studio
        </>,
        "",
        "2019",
        true,
        true,
      ],
    },
  ];

  const links = {
    "Sorting Visualizer": "https://sort-app.netlify.app/",
    "PS5 UI for Windows!": "https://youtu.be/SHyACovTXSE",
    "Grades Tracker Web App": "https://qalculater.netlify.app/login",
    "Snake Game": "",
    "Online Portfolio": "https://saqibali.ca",
  };
  const [repo, setRepos] = useState([]);
  const [gridView, setView] = useState(false);
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
        Projects{" "}
        <button
          class="header-btn"
          onClick={() => {
            setView(!gridView);
            if (gridView) {
              document.getElementById("projects").style.maxWidth = "1200px";
            } else {
              document.getElementById("projects").style.maxWidth = "100%";
            }
          }}
        >
          <Grid1x2Fill size={20} color={"#c50000"} />
        </button>
        <hr />
      </h2>
      <div class="projects" id="projects">
        {!gridView && (
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
        )}
        {!gridView ? (
          <Carousel width="inherit" {...getConfigurableProps()}>
            {projects.map((project) => {
              return (
                <>
                  <div class="single" style={{ paddingTop: "0px" }}>
                    {!Object.entries(project)[0][1][4] ? (
                      <div class="player" data-aos="fade-right">
                        <img src={laptop} />
                        <div class="hello">
                          {Object.entries(project)[0][1][5] ? (
                            <img src={Object.entries(project)[0][1][0]} />
                          ) : (
                            <ReactPlayer
                              id="player"
                              width="-webkit-fill-available"
                              height="fit-content"
                              loop={true}
                              playing={true}
                              url={Object.entries(project)[0][1][0]}
                              muted={true}
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div class="player" data-aos="fade-right">
                        <img src={phone} class="phone" />
                        <div class="hello2">
                          {Object.entries(project)[0][1][5] ? (
                            <img src={Object.entries(project)[0][1][0]} />
                          ) : (
                            <ReactPlayer
                              id="player"
                              width="fit-content"
                              height="fit-content"
                              loop={true}
                              playing={true}
                              url={qalc}
                              muted={true}
                            />
                          )}
                        </div>
                      </div>
                    )}

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
        ) : (
          <div class="gridView">
            {projects.map((project) => {
              return (
                <>
                  <div class="single" style={{ paddingTop: "0px" }}>
                    {!Object.entries(project)[0][1][4] ? (
                      <div class="player" data-aos="fade-right">
                        <img src={laptop} />
                        <div class="hello">
                          {Object.entries(project)[0][1][5] ? (
                            <img src={Object.entries(project)[0][1][0]} />
                          ) : (
                            <ReactPlayer
                              id="player"
                              width="-webkit-fill-available"
                              height="fit-content"
                              loop={true}
                              playing={true}
                              url={Object.entries(project)[0][1][0]}
                              muted={true}
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div class="player" data-aos="fade-right">
                        <img src={phone} class="phone" />
                        <div class="hello2">
                          {Object.entries(project)[0][1][5] ? (
                            <img src={Object.entries(project)[0][1][0]} />
                          ) : (
                            <ReactPlayer
                              id="player"
                              width="fit-content"
                              height="fit-content"
                              loop={true}
                              playing={true}
                              url={qalc}
                              muted={true}
                            />
                          )}
                        </div>
                      </div>
                    )}

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
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
