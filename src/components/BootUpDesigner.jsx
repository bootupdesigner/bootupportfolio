import React from "react";
import ServiceLink from "./ServiceLink";
import Slideshow from "./Slideshow";
import WebServices from "./WebServices";

const BootUpDesigner = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Boot Up Designer</h1>
        <p>E-Commerce and Database Design Specialist</p>
      </div>
      <WebServices />
      <Slideshow />
      <ServiceLink />
    </div>
  );
};
export default BootUpDesigner;
