import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ServiceLink = () => {
  return (
    <div className="servicelink">
      <Button variant="outline-dark">
        <Link to="/Services">Learn More About Our Services</Link>
      </Button>
    </div>
  );
};

export default ServiceLink;
