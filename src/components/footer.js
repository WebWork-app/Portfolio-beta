import React, { useEffect, useState } from 'react';
import footer from "./images/footer.png";

function Footer() {
    useEffect(() => {
    }, [])

    return (
        <div class="footer">
            <img src={footer} />
            <div class="footer-content">
                <h1>Interested to work togather?</h1>
                <button>
                    Lets talk!
                </button>
            </div>
        </div>
    )
}



export default Footer;