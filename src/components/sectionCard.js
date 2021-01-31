import React, { useEffect, useState } from 'react';
import working from "./images/working.gif";
import Icon from "./images/Profile.jpg";
import { HouseDoorFill, PersonBadge, BriefcaseFill, BookFill, Mailbox, Mailbox2 } from "react-bootstrap-icons";
function SectionCard() {
    return (
        <>
            <div id="two">
                <h1>I am <br /> Saqib Ali</h1>
                <h3>Motivated. Determined. Passionate</h3>
                <img src={working} />
                <div class="section-container-btns">
                    <button class="section-btns mail">
                        Email Me
                    </button>
                    <button class="section-btns resume">
                        Resume
                    </button>
                </div>
            </div>
            <br />
            <br />
            <div id="four">
                <img src={Icon} alt="" />
                <h1>Hello World!</h1>
                <h3>
                    I am a student at university of Waterloo pursuing
                    bachelors in computer engineering with strong interests in programming
                    and development.
                </h3>
                <div></div>
            </div>
            <br />
            <br />
        </>
    )

}

export default SectionCard;