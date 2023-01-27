import React from "react";
import { staticData } from "../data/staticData";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { content } = staticData;

  return (
    <div className="hero">
      <div className="text-wrapper">
        <h1 className="hero-title">{content.title}</h1>
        <p className="hero-subtitle">{content.subtitle}</p>
      </div>
      <div className="action-wrapper">
        <Link className="link cta-btn" to="/test">
          {content.cta}
        </Link>
        <span>{content.time}</span>
      </div>
    </div>
  );
}
