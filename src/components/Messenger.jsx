import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Messenger = () => {
  return (
    <div className="messenger">
      <a href="https://www.m.me/bootupwebdesigns">
        <FontAwesomeIcon
          icon={["fab", "facebook-messenger"]}
          size="3x"
          pull="right"
        />
      </a>
    </div>
  );
};
export default Messenger;
