// src/components/TopNav.jsx
import { Link, useLocation } from "react-router-dom";
import "./TopNav.css"; // separate CSS for the nav

export default function TopNav() {
  const location = useLocation();

  return (
    <header className="top-nav">
      <nav>
        <button className={`nav-button nav-bar ${location.pathname === "/" ? "active" : ""}`}>
          About
        </button>
        <Link to="/projects">
          <button className={`nav-button nav-bar ${location.pathname === "/projects" ? "active" : ""}`}>
            Projects
          </button>
        </Link>
      </nav>
    </header>
  );
}
