import React from "react";

interface IProps {
    text: string;
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ text, onTextChange }) => (
  <input
    className="textInput"
    value={text}
    onChange={onTextChange}
    type="text"
    placeholder="Enter city name only from United Kingdom"
  />
);

export default Input;
