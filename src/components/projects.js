import React, { useEffect, useState } from 'react';
import { ArrowBarLeft, ArrowBarRight, Calendar2 } from "react-bootstrap-icons";
import opentext from "./images/opentext.png";
import wework from "./images/WeWork.png";

function Project() {

    const projects = [
        {
            "Playstation 5 skin":
                <>
                    <li>Developed an interactive front-end which provides a clean interface to launch games</li>
                    <li>Implemented core functionality to launch, hide, sort, remove games using Python scripts</li>
                    <li>UI styling and interactivity was implemented using Kodi</li>
                    <li>Incorporated the Xinput api to report information regarding controllers in UI</li>
                    <li>The skin can be viewed here: Play Station 5 Skin</li>
                </>
        },
        {
            "Snake Game":
                <>
                    <li>Built a clone of the classic addictive game: Snake</li>
                    <li>Implemented core game logic and visuals using C++</li>
                    <li>Incorporated fundamental OOP principles to provide a clear modular structure</li>
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
        <div id="five" class="experience-section">
            <h1>Projects</h1>
            <div class="gaming" >
                {
                    projects.map((project) => {
                        return (
                            <div class="card">
                                <h3>{Object.entries(project)[0][0]}</h3>
                                <br />
                                <div class="text-card">
                                    <ul>
                                        {Object.entries(project)[0][1]}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Project;