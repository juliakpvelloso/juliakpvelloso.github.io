import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  text: string;
  fill?: boolean;
  href?: string;
  large?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  fill = false,
  href,
  large = false,
}) => {
  const className = `custom-button ${fill ? "filled" : "outlined"} ${
    large ? "large" : ""
  }`;

  if (href) {
    const isExternal = href.startsWith("http");

    // 🌍 External link → normal anchor
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      );
    }

    // 🧭 Internal route → React Router (HashRouter-safe)
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }

  return <button className={className}>{text}</button>;
};

export default Button;
