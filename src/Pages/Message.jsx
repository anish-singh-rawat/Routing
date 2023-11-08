import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../component/Nav.css'
import messagesList from "./MessageList";

export default function Message() {
  const [messagees, setMessagees] = useState(messagesList)
  return (
    <>
      <center>
        <br />
        <h2>List of Message</h2>
        {
          messagees.map((item) => (
            <div key={item.id}>
              <div>
                <Link to={`/Message/${item.id}`} className="sub-message-link">{item.message}</Link>
              </div>
            </div>
          ))
        }
      </center>
    </>
  );
}
