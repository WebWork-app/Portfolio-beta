import React, { useEffect, useState } from 'react';
import Icon from "./images/profile.jpg";
import bg from "./images/body-wave2.png"
import bg2 from "./images/flow.png"
import resume from "./files/Resume 2A.docx.pdf"
function SectionCard() {
    window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
            document.getElementById("navbar").className = "trans";
            document.getElementById("imagee").className = "sli top-img";
            document.getElementById("imagee2").className = "sli bottom-img";
        }
        else if (window.scrollY > 50) {
            document.getElementById("navbar").className = "nav-scrolling";
            document.getElementById("imagee").className = "top-img";
            document.getElementById("imagee2").className = "bottom-img";
        }
    })
    return (
        <div class="main">
            <img src={Icon} />
            <div id="two" class="main-img">
                <img id="imagee" class="top-img" src={bg} style={{ "max-width": "200%", "width": "200%", "position": "absolute", "top": 0, "transform": "rotate(0)" }} />
                <img id="imagee2" class="bottom-img" src={bg} style={{ "max-width": "200%", "width": "200%", "position": "absolute", "bottom": 0 }} />
                <h1>
                    SAQIB ALI
                    <br />
                    <p class="aspire">An Aspring Software Engineer</p>
                </h1>
                <p>
                    A student of computer engineering with a strong passion for
                    software development and solid industry experience.
                    If you are looking to hire, please contact
                    me here:
                </p>
                <div class="section-container-btns">
                    <a class="mail">
                        Email Me
                    </a>
                    <a
                        class="resume"
                        href={resume}
                        type="application/pdf" target="_blank"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )

}

export default SectionCard;