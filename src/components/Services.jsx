import react from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Services</h1>
        <p>Web Services Make Your Business Easier</p>
      </div>
      <div className="servicelink">
        <Button variant="outline-dark">
          <Link to="/Contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;
