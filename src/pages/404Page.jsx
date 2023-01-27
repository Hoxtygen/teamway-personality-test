import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import NotFound from "../views/NotFound";

export default function Page404() {
  return (
    <PageWrapper>
    <div className="not-found-wrapper">

      <NotFound />
    </div>
    </PageWrapper>
  );
}
