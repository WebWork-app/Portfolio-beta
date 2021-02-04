import React, { useEffect, useState } from 'react';

import { HouseDoorFill, PersonBadge, BriefcaseFill, BookFill, Mailbox, Mailbox2 } from "react-bootstrap-icons";
function Navbar() {
    return (
        <nav id="navbar" class="nav-scrolling">
            <div class="nav-left">
                SA
            </div>
            <ul class="nav-right">
                <a href="#two">
                    <li>
                        <span>About</span>
                    </li>
                </a>
                <a href="#three">
                    <li>
                        <span>Experience</span>
                    </li>
                </a>
                <a href="#four">
                    <li>
                        <span>Projects</span>
                    </li>
                </a>
            </ul>
        </nav>
    )

}

export default Navbar;