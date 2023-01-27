import React from "react";
import { Link } from "react-router-dom";
import { staticData } from "../data/staticData";

export default function NotFound() {
  const { notFound } = staticData;
  return (
    <div className="not-found">
      <h2>{notFound.title}</h2>
      <p className="not-found-text">{notFound.text}</p>
      <Link className="link cta-btn-a" to="/">Go Home</Link>
    </div>
  );
}
