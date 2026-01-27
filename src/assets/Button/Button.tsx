import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  fill?: boolean;
  href?: string;
  large?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, fill = false, href, large = false}) => {
  const className = `custom-button ${fill ? "filled" : "outlined"} ${large ? "large" : ""}`;
  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <a
        href={href}
        className={className}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
      </a>
    );
  }

  return <button className={className}>{text}</button>;
};

export default Button;
