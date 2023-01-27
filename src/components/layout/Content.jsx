import React from "react";

export default function Content({ children }) {
  return (
    <main className="main">
      <>{children}</>
    </main>
  );
}
