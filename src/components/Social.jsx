import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className="social">
      <h4>Stay Connected: </h4>
      <a href="https://www.twitter.com/bootupdesigners">
        <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
      </a>
      <a href="https://www.facebook.com/bootupwebdesigns/">
        <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/curtis-shepard-2a3654181/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
      </a>
    </div>
  );
};

export default Social;