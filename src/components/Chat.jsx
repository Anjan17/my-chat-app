import React from "react";

const Chat = ({ text, id, from, to, timeStamp, user }) => (
  <div
    className="chat"
    style={{
      textAlign: to === user.name ? "right" : "left",
      padding: "10px 0",
    }}
  >
    <div className="chat-title">
      {from}
      {timeStamp}
    </div>
    <div className="chat-body">{text}</div>
  </div>
);

export default Chat;
