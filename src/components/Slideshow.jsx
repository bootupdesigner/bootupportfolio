import React from "react";
import { Slide } from "react-slideshow-image";

import e_commerce_button from "../photos/e_commerce_button.jpg";
import database_button from "../photos/database_button.jpg";
import projectplus from "../photos/projectplus.png";
import projectcapm from "../photos/projectcapm.png";

const slideImages = [
  { e_commerce_button },
  { database_button },
  { projectcapm },
  { projectplus }
];

const Slideshow = () => {
  return (
    <div>
      <h2 className="center-text">
        <i>CERTIFICATIONS</i>
      </h2>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img
              src={e_commerce_button}
              alt="Certified Internet Webmaster: E-Commerce Design Specialist"
              height="100vh"
              width="100vw"
            />
            <span style={{textAlign: "center"}}>Certfied Internet Webmaster</span>
            <h4 style={{textAlign: "center"}}>E-Commerce Design Specialist</h4>
          </div>
          <div className="each-slide">
            <img
              src={database_button}
              alt="Certified Internet Webmaster: Database Design Specialist"
              height="100vh"
              width="100vw"
            />
            <span style={{textAlign: "center"}}>Certfied Internet Webmaster</span>
            <h4 style={{textAlign: "center"}}>Database Design Specialist</h4>
          </div>
          <div className="each-slide">
            <img
              src={projectplus}
              alt="ComnpTIA Project Plus"
              height="100vh"
              width="100vw"
            />
            <span style={{textAlign: "center"}}>Computing Technology Industry Association</span>
            <h4 style={{textAlign: "center"}}>Project+ Certified</h4>
          </div>
          <div className="each-slide">
            <img
              src={projectcapm}
              alt="ComnpTIA Certified Associate in Project Management"
              height="100vh"
              width="100vw"
            />
            <span style={{textAlign: "center"}}>Computing Technology Industry Association</span>
            <h4 style={{textAlign: "center"}}>Certified Associate in Project Management</h4>
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Slideshow;
