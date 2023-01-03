import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { aribh, shazilr, sufyana, saqiba } from "./images";

const AboutUs = () => {
  return (
    <div id="five">
      <div class="about-header">
        <h2 id="about-font" class="slider-header" data-aos="fade-up">
          Meet the Team
          <hr />{" "}
        </h2>
        <h3 class="aos-init aos-animate about-sub">
          Led by some of Canada's brightest young minds, our team of
          <i> developers</i> and <i>designers,</i> are here to help you build your
          ideal website. Get to know the people inspiring the next wave of{" "}
          <i>creativity</i> at WebWorks:
        </h3>
      </div>

      <div class="about-content">
        <div class="row">
          <div class="column">
            <img src={shazilr} alt="Shazil" />
            <div class="container">
              <h2>Shazil R.</h2>
              <p class="title">CEO & Co-founder<br /><br /></p>
            </div>
          </div>

          <div class="column">
            <img src={saqiba} alt="Saqib" />
            <div class="container">
              <h2>Saqib A.</h2>
              <p class="title">Co-founder & Director of Technology<br /><br /></p>
            </div>
          </div>

          <div class="column">
            <img src={aribh} alt="Arib" />
            <div class="container">
              <h2>Arib H.</h2>
              <p class="title">Co-founder & Director of Technology<br /><br /></p>
            </div>
          </div>

          <div class="column">
            <img src={sufyana} alt="Sufyan" />
            <div class="container">
              <h2>Sufyan A.</h2>
              <p class="title">Co-founder & Director of Design <br /> and Marketing<br /></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// function AboutUs() {
//   return (
//     <div class="about-section">
//       <h2 id="about-font" class="slider-header" data-aos="fade-up">
//         Meet the Team
//         <hr />{" "}
//       </h2>
//       <h3 class="aos-init aos-animate" className="aboutUsSub">
//         Led by some of Canada's brightest young minds, our team of
//         <i> developers</i> and <i>designers,</i> are here to help you build your
//         ideal website. Get to know the people inspiring the next wave of{" "}
//         <i>creativity</i> at WebWorks:
//       </h3>

//       <div class="row">
//         <div class="column">
//           <div class="card">
//             <img src={shazilr} alt="Shazil" />
//             <div class="container">
//               <h2>Shazil R.</h2>
//               <p class="title">CEO & Co-founder<br /><br /></p>
//             </div>
//           </div>
//         </div>

//         <div class="column">
//           <div class="card">
//             <img src={saqiba} alt="Saqib" />
//             <div class="container">
//               <h2>Saqib A.</h2>
//               <p class="title">Co-founder & Director of Technology</p>
//             </div>
//           </div>
//         </div>

//         <div class="column">
//           <div class="card">
//             <img src={aribh} alt="Arib" />
//             <div class="container">
//               <h2>Arib H.</h2>
//               <p class="title">Co-founder & Director of Technology</p>
//             </div>
//           </div>
//         </div>

//         <div class="column">
//           <div class="card">
//             <img src={sufyana} alt="Sufyan" />
//             <div class="container">
//               <h2>Sufyan A.</h2>
//               <p class="title">Co-founder & Director of Design and Marketing</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default AboutUs;
