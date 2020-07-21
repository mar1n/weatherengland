import React from "react";

interface InputProps {
    text: string;
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ text, onTextChange }) => (
  <input
    className="textInput"
    value={text}
    onChange={onTextChange}
    type="text"
    placeholder="Enter city name only from United Kingdom"
  />
);

export default Input;
