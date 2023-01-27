import React from "react";

export default function Feedback({ text, title }) {
  return (
    <div>
      <h3 className="feedback-title">{title}</h3>
      <p className="feedback-text">{text}</p>
    </div>
  );
}
