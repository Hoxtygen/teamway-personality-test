import React from "react";
import { staticData } from "../../data/staticData";

export default function Footer() {
  const { footer } = staticData;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h5>&copy; 2022-2050 {footer.copyright} </h5>
        <nav className="nav">
          <ul className="nav-ul footer-nav">
            {footer.links.map((link) => (
              <li className="link-item" key={link}>{link}</li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
