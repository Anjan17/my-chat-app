import React, { useRef, useState } from "react";
import TextBox from "../TextBox";
const ChatScreenFooter = ({ onSend, children }) => {
  const [textBoxValue, setTextBoxValue] = useState("");
  const handleTextChange = (e) => {
    const { value } = e.target;
    setTextBoxValue(value);
  };
  const textBoxRef = useRef();
  return (
    <div className="chat-footer" style={{ display: "flex" }}>
      <TextBox
        value={textBoxValue}
        onChange={handleTextChange}
        inputRef={textBoxRef}
        style={{ width: "-webkit-fill-available" }}
      />
      <button
        onClick={() => {
          textBoxValue && onSend(textBoxValue);
        }}
      >
        Send
      </button>
      <button
        onClick={() => {
          setTextBoxValue("");
          textBoxRef.current && textBoxRef.current.focus();
        }}
      >
        Cancel
      </button>
      {children}
    </div>
  );
};

export default ChatScreenFooter;
