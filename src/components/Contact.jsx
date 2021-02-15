import React from "react";
import Social from "./Social";
import ServiceLink from "./ServiceLink";

const Contact = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Contact</h1>
        <p>We look forward to hearing from you!</p>
      </div>
      <br />
      <Social />
      <p className="mail">
        We're here to help you 24/7{" "}
        <a href="mailto:bootup.itinfo@gmail.com">contact us today</a>!
      </p>
      <div className="contact">
        <form action="https://formspree.io/f/mrgopjod" method="POST">
          <label>Full Name:</label>
          <br />
          <input type="text" name="full_name" required />
          <br />
          <label>Email:</label>
          <br />
          <input type="text" name="_replyto" required />
          <br />
          <label>Your message:</label>
          <br />
          <textarea name="message" required></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
      <ServiceLink />
    </div>
  );
};

export default Contact;


