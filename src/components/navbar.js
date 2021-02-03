import React, { useEffect, useState } from 'react';

import { HouseDoorFill, PersonBadge, BriefcaseFill, BookFill, Mailbox, Mailbox2 } from "react-bootstrap-icons";
function Navbar() {
    // TODO: change navbar when scrolling
    const changeNavColor = () => {
        let element = document.getElementById("navbar");
        if (element != null) {
            console.log(element.scrollHeight);
            if (element.scrollTop == 0) {
                element.className = "";
            }
            else {
                element.className = "nav-scrolling";
            }
        }
    }
    return (
        <nav id="navbar" onscroll={changeNavColor()}>
            <div class="nav-left">
                SA
            </div>
            <ul class="nav-right">
                <a href="#two">
                    <li>
                        <span>About</span>
                    </li>
                </a>
                <a href="#four">
                    <li>
                        <span>Work Experience</span>
                    </li>
                </a>
                <a href="#three">
                    <li>
                        <span>Projects</span>
                    </li>
                </a>
            </ul>
        </nav>
    )

}

export default Navbar;