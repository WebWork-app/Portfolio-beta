import CPlusPlus from "./images/CPlusPlus.svg";
import Java from "./images/java.svg";
import JS from "./images/JS.png";
import Python from "./images/python.png";
import HTML from "./images/html.png";
import Css from "./images/css.png";
import React from "./images/react.png";
import Spring from "./images/spring.png";
import Docker from "./images/Docker.png";
import NodeJS from "./images/nodeJS.png";
import Git from "./images/git.png";
import TypeScript from "./images/typescript.png";

function Slider() {
  const technolgies = [
    { "C++": CPlusPlus },
    { Java: Java },
    { Spring: Spring },
    { "Java Script": JS },
    { "Type Script": TypeScript },
    { Python: Python },
    { Html: HTML },
    { Sass: Css },
    { React: React },
    { Docker: Docker },
    { "Node JS": NodeJS },
    { Git: Git },
  ];
  return (
    <div class="slider-container">
      <h2 class="slider-header" data-aos="fade-up">
        Technologies
        <hr />
      </h2>
      <div class="slider" data-aos="zoom-out-up" data-aos-delay={50}>
        {technolgies.map((technolgy, index) => {
          return (
            <div class="slider-content">
              <img src={Object.entries(technolgy)[0][1]} class="slider-img" />
              <h2>{Object.entries(technolgy)[0][0]}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Slider;
