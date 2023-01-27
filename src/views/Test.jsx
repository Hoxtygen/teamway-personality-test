import React, { Fragment, useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [data, setData] = useState({
    "question-1": 0,
    "question-2": 0,
    "question-3": 0,
    "question-4": 0,
    "question-5": 0,
  });

  const isLastQuestion = currentQuestion === questions.length - 1;

  const handlePrevious = () => {
    if (currentQuestion + 1 >= 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (isLastQuestion) {
      navigate("/result", { state: { data: data } });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  return (
    <div className="container">
      <h2>Personality Test</h2>

      <div className="questions-card">
        <h3>
          Question {currentQuestion + 1} / {questions.length}
        </h3>

        <form action="">
          <h4>{questions[currentQuestion].text} </h4>
          <Fragment>
            {questions[currentQuestion].options.map((option) => (
              <div key={option.id} className="option-link-item">
                <label className="radio-label">
                  <input
                  className="radio-input"
                    type="radio"
                    name={questions[currentQuestion].name}
                    value={option.score}
                    id={questions[currentQuestion].name}
                    checked={String(option.score) === data[questions[currentQuestion].name]}
                    onChange={(e) => {
                      setData({
                        ...data,
                        [questions[currentQuestion].name]: e.target.value,
                      });
                    }}
                  />
                  <span>{option.text}</span>
                </label>
              </div>
            ))}
          </Fragment>
          <div className="ctrl-btn-wrapper">
            {currentQuestion > 0 && (
              <button onClick={() => handlePrevious()} type="button" className="double ctrl-btn">
                Previous
              </button>
            )}
            <button
              onClick={() => handleSubmit(data)}
              type="button"
              disabled={!data[questions[currentQuestion].name]}
              className={currentQuestion > 0 ? "double ctrl-btn" : "single ctrl-btn"}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
