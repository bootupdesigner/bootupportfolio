import React from "react";
import ServiceLink from "./ServiceLink";

import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";

import clutchcouturelogo from "../photos/clutchcouturelogo.png";
import ctyslogo from "../photos/ctyslogo.png";
import trifinancialserviceslogo from "../photos/trifinancialserviceslogo.png";
import theofficialgluelogo from "../photos/theofficialgluelogo.png";
import frannysfannyandmorelogo from "../photos/frannysfannyandmorelogo.png";
import kingkasslogo from "../photos/kingkasslogo.png";

const Portfolio = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Portfolio</h1>
        <p>Web Designs Powered by Boot Up Web Designs</p>
      </div>
      <CardDeck style={{ margin: "5px 10px" }}>
        <Card>
          <Card.Img
            variant="top"
            src={theofficialgluelogo}
            alt="GLUE LLC logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>GLUE LLC</Card.Title>
            <Card.Text>
              The Official Glue website was designed as an event page for GLUE
              LLC's one week webinar event. The website provides guests with
              information about the events and how they can attend.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.theofficialglue.com/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={ctyslogo}
            alt="cheaper than your stylist logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>Cheaper Than Your Stylist</Card.Title>
            <Card.Text>
              Cheaper Than Your Stylist started as a store where you could
              purchase your lashes for less. Since opening the online store has
              evolved into much more, providing small business resources now as
              well.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.ctys.store/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={trifinancialserviceslogo}
            alt="clutch couturellc logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>Tri Financial Services</Card.Title>
            <Card.Text>
              Tri Financial Services website's design was a revamp for us.
              Providing financial services, this informational website was
              designed to help plan a financially successful future for you and
              your family.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.trifinancialservices.com/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      {/* this is the second card deck */}
      <CardDeck style={{ margin: "5px 10px" }}>
        <Card>
          <Card.Img
            variant="top"
            src={clutchcouturelogo}
            alt="Clutch Couture LLC logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>Clutch Couture LLC</Card.Title>
            <Card.Text>
              Clutch Couture is an experience like no other; This website allows
              you to plan your own paint party with all the materials included.
              Book a date, make a deposit and invite your friends. This website
              has everything.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.clutch-couture.com/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={frannysfannyandmorelogo}
            alt="frannys fanny and more logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>Franny's Fanny and More</Card.Title>
            <Card.Text>
              Franny's Fanny and More was inspired by Breast Cancer survivor,
              Franny. This website is a testament to Franny's journey through
              the fight for her life and her son's autism.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.frannysfannyandmore.online/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={kingkasslogo}
            alt="King Kass Logo"
            width="15vw"
          />
          <Card.Body>
            <Card.Title>King Kass</Card.Title>
            <Card.Text>
              King Kass is a mink lash store and blog website. King Kass is your
              go-to for lash and make-up tips. Purchase your lashes and learn
              how to install them from King Kass herself.
            </Card.Text>
            <Button
              variant="primary"
              size="sm"
              href="https://www.kingkass.com/"
              target="_blank"
            >
              View Website
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <ServiceLink />
    </div>
  );
};

export default Portfolio;
