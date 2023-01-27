/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";
import Feedback from "../components/Feedback";
import { staticData } from "../data/staticData";
import { convertToArray, isIdentical, mapArrayToObject } from "../helpers/utils";

export default function Result({ data }) {
  const { personality, header } = staticData;
  const resultArr = data && convertToArray(data);
  const arrObject = mapArrayToObject(resultArr);
  const arrObjectLen = Object.keys(arrObject);
  return (
    <div className="container test-result">
      {(() => {
        if (isIdentical(resultArr)) {
          if (resultArr[0] == 1)
            return (
              <Feedback title={personality.introvert.title} text={personality.introvert.text} />
            );
          if (resultArr[0] == 2)
            return (
              <Feedback
                title={personality.publicIntrovertPrivateExtrovert.title}
                text={personality.publicIntrovertPrivateExtrovert.text}
              />
            );
          if (resultArr[0] == 3)
            return (
              <Feedback
                title={personality.publicExtrovertPrivateIntrovert.title}
                text={personality.publicExtrovertPrivateIntrovert.text}
              />
            );
        } else if (!isIdentical(resultArr) && arrObjectLen.length >= 2) {
          return <Feedback title={personality.extrovert.title} text={personality.extrovert.text} />;
        } else {
          return (
            <Feedback title={personality.complicated.title} text={personality.complicated.text} />
          );
        }
      })()}
      <Link to="/test" className="link cta-btn-a result-btn">
        {header.retake}
      </Link>
    </div>
  );
}
