import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  fill?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, fill = false }) => {
  return (
    <button className={`custom-button ${fill ? "filled" : "outlined"}`}>
      {text}
    </button>
  );
};

export default Button;
