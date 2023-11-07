import React from "react";
import { Link } from "react-router-dom";
import '../component/Nav.css'

export default function Message() {
  return (
    <>
      <center>
        <br />
        <h2>List of Message</h2>
        <br />
        <div>
          <Link to="/MessageOne" className="sub-message-link"> Message 1</Link>
        </div>
        <br />
        <div>
          <Link to="/MessageTwo" className="sub-message-link"> Message 2</Link>
        </div>
        <br />
        <div>
          <Link to="/MessageThree" className="sub-message-link"> Message 3</Link>
        </div>
      </center>
    </>
  );
}
