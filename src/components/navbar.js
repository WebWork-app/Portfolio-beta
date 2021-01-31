import React, { useEffect, useState } from 'react';

import { HouseDoorFill, PersonBadge, BriefcaseFill, BookFill, Mailbox, Mailbox2 } from "react-bootstrap-icons";
function Navbar() {
    return (
        <nav>
            <ul>
                <a href="#two">
                    <li>
                        <span><HouseDoorFill size={16} /></span>
                        </li>
                </a>
                <a href="#four">
                    <li>
                        <span><PersonBadge size={16} /></span>
                        </li>
                </a>
                <a href="#three">
                    <li>
                        <span><BriefcaseFill size={16} /></span>
                    </li>
                </a>
                <a id="project" href="#five">
                    <li>
                        <span><BookFill size={16} /></span>
                    </li>
                </a>
                <a href="#six">
                    <li>
                        <span><Mailbox2 size={16} /></span>
                    </li>
                </a>
            </ul>
        </nav>
    )

}

export default Navbar;