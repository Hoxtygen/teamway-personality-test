import React from "react";
import { Link, useLocation } from "react-router-dom";
import { staticData } from "../../data/staticData";

export default function Header() {
  const location = useLocation();

  const { header } = staticData;
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo link">
          {header.logo}
        </Link>
        <nav className="nav">
          <ul className="nav-ul">
            {header.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </nav>
        <Link to="/test" className="link cta-btn-a header-cta">
          {location.pathname === "/result"
            ? `${header.retake}`
            : `${header.cta}`}
        </Link>
      </div>
    </header>
  );
}
