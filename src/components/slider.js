import CPlusPlus from "./images/CPlusPlus.png";
import Java from "./images/java.png";
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
            { 'CSS': Css },
            { 'React': React },
            { 'Spring': Spring },
        ]
    return (
        <div class="slider-container">
            <h1 class="slider-header">
                Technologies
            </h1>
            <div class="slider">
                {
                    technolgies.map((technolgy) => {
                        return (
                            <div class="slider-content">
                                <img
                                    src={Object.entries(technolgy)[0][1]}
                                    class="slider-img" />
                                <p>
                                    {Object.entries(technolgy)[0][0]}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Slider;