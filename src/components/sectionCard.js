import React, { useEffect, useState } from 'react';
import working from "./images/working.gif";
import Icon from "./images/Profile.jpg";
import bg from "./images/body-wave2.png"
import { HouseDoorFill, PersonBadge, BriefcaseFill, BookFill, Mailbox, Mailbox2 } from "react-bootstrap-icons";
function SectionCard() {
    return (
        <div class="main">
            <img src={Icon} />
            <div id="two" class="main-img">
            <img class="top-img" src={bg} style={{ "max-width": "100%", "width": "100%", "position": "absolute", "left": 0, "top": 0,"transform":"rotate(0)" }} />
                <img class="bottom-img" src={bg} style={{ "max-width": "100%", "width": "100%", "position": "absolute", "left": 0, "bottom": 0 }} />
                <h1>Saqib Ali</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                <div class="section-container-btns">
                    <button class="section-btns mail">
                        Email Me
                    </button>
                    <button class="section-btns resume">
                        Resume
                    </button>
                </div>
            </div>
        </div>
    )

}

export default SectionCard;