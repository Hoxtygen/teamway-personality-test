import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Result from "../views/Result";

export default function TestResult() {
  const location = useLocation();

  if (location.state === null) {
  return <Navigate to="/" />;
}
const { data } = location && location.state;

  return (
    <PageWrapper>
      <Result data = {data} />
    </PageWrapper>
  );
}
