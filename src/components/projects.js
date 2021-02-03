import React, { useEffect, useState } from 'react';
import { ArrowBarLeft, ArrowBarRight, Calendar2 } from "react-bootstrap-icons";
import ps5 from "./images/ps5-project.png";
import wework from "./images/WeWork.png";

function Project() {

    const projects = [
        {
            "Playstation 5 skin":
                <>
                    Developed an interactive front-end which provides a clean interface to launch games
                    Implemented core functionality to launch, hide, sort, remove games using Python scripts
                    UI styling and interactivity was implemented using Kodi
                    Incorporated the Xinput api to report information regarding controllers in UI
                    The skin can be viewed here: Play Station 5 Skin
                </>
        },
        {
            "Snake Game":
                <>
                    Built a clone of the classic addictive game: Snake
                    Implemented core game logic and visuals using C++
                    Incorporated fundamental OOP principles to provide a clear modular structure
                </>
        },
        {
            "Online Portfolio":
                <>
                    Web Developement has been my passion for some time now! I created this responsive website using
                    HTML,
                    CSS, JavaSCript with some Jquery!
                </>
        }
    ]

    useEffect(() => {
    }, [])
    return (
        <div class="project-section">
            <h2>Projects</h2>
            <div class="projects" >
                {
                    projects.map((project) => {
                        return (
                            <>
                                <div class="single">
                                    <img src={ps5} />
                                    <div class="project-info">
                                        <h3>{Object.entries(project)[0][0]}</h3>
                                        <br />
                                        <p>
                                            {Object.entries(project)[0][1]}
                                        </p>
                                        <div class="project-btns">
                                            <button class="main-btn">Preview</button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Project;