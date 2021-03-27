import CPlusPlus from "./images/CPlusPlus.svg";
import Java from "./images/java.svg";
import JS from "./images/JS.png";
import Python from "./images/python.png";
import HTML from "./images/html.png";
import Css from "./images/css.png";
import React from "./images/react.png";
import Spring from "./images/spring.png";



function Slider() {
    const technolgies =
        [
            { 'C++': CPlusPlus },
            { 'Java': Java },
            { 'Java Script': JS },
            { 'Python': Python },
            { 'Html': HTML },
            { 'Sass': Css },
            { 'React': React },
            { 'Spring': Spring },
        ]
    return (
        <div class="slider-container">
            <h2 class="slider-header">
                Technologies
            </h2>
            <div class="slider">
                {
                    technolgies.map((technolgy) => {
                        return (
                            <div class="slider-content">
                                <img
                                    src={Object.entries(technolgy)[0][1]}
                                    class="slider-img" />
                                <h2>
                                    {Object.entries(technolgy)[0][0]}
                                </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Slider;