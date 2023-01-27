import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
