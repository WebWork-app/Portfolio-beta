import React, { useEffect, useState } from 'react';
import Icon from "./images/profile.jpg";
import bg from "./images/body-wave2.png"
function SectionCard() {
    return (
        <div class="main">
            <img src={Icon} />
            <div id="two" class="main-img">
                <img class="top-img" src={bg} style={{ "max-width": "100%", "width": "100%", "position": "absolute", "left": 0, "top": 0, "transform": "rotate(0)" }} />
                <img class="bottom-img" src={bg} style={{ "max-width": "100%", "width": "100%", "position": "absolute", "left": 0, "bottom": 0 }} />
                <h1>
                    SAQIB ALI
                    <br />
                    <p class="aspire">An Aspring Software Engineer</p>
                </h1>
                <p>
                    An undergraduate student at the university of waterloo completing
                    bachelor's in computer engineering with a strong passion for
                    software development. If you are looking to hire, please contact
                    me here:
                </p>
                <div class="section-container-btns">
                    <a class="mail">
                        Email Me
                    </a>
                    <a
                        class="resume"
                        href="https://drive.google.com/file/d/1fZ_0gAez0xKIszxyxK4KE3VPf8e_hNG8/view?usp=sharing"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )

}

export default SectionCard;