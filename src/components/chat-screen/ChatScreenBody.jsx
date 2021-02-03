import React from "react";
import classnames from "classnames";

const ChatScreenBody = ({ className, children = "Welcome to myChat" }) => (
  <div className={classnames("chat-screen-body", className)}>{children}</div>
);

export default ChatScreenBody;
