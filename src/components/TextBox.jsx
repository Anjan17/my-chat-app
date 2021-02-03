import React, { useState } from "react";

const TextBox = ({ value, onBlur, inputRef, ...rest }) => {
  const onChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
      value={value}
      ref={inputRef}
    />
  );
};

export default TextBox;
