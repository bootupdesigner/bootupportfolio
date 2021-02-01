import React from 'react';

const Contact = () => {
    return(
        <div>
          <div className="page-description">
        <h1>Contact</h1>
        <p>We look forward to hearing from you!</p>
        </div>
        <div className="contact">
      <form action="https://formspree.io/f/mrgopjod" method="POST">
        <label >Full Name:</label><br />
        <input type="text" name="full_name" required/><br />
        <label>Email:</label><br />
        <input type="text" name="_replyto" required/><br />
        <label>Your message:</label><br />
        <textarea name="message" required></textarea><br />
        <button type="submit">Send</button>
      </form>
      </div>
      </div>
    );
};

export default Contact;