import react from "react";
import WebServices from "./WebServices";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Services</h1>
        <p>Web Services Make Your Business Easier</p>
      </div>
      <div className="startups" style={{textAlign: "center", display: "block", width: "100%"}}>
        <h3>Business Startups</h3>
        <p style={{padding: "0px 10vw 0px 10vw"}}>Boot Up Web Professionaionals offers a number of services to help jump start you business or creative idea. We'll provide you with Limitied Liability Company filings (LLC), Employer ID Number(EIN), Vendors Tax ID, Vendors List, Logos, and a <i>WEBSITE!</i></p>
      </div>
      <WebServices />

      <div className="servicelink">
        <Button variant="outline-dark">
          <Link to="/Contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;
