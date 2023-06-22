import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./Question.css"
export const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  setAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const goToNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  };

  useEffect(() => {
    progressBar.current.classList.remove("progressbar-active");
    setTimeout(() => {
      progressBar.current.classList.add("progressbar-active");
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 30 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  return (
    <>
      <div className="question">
        <div
          className="progress-bar progressbar-active"
          ref={progressBar}
        ></div>
        <div className="question-count flex justify-center items-center place-content-center mt-5">
          <b>{currentQuestion + 1}</b>/<b>{totalQuestions}</b>
        </div>
        <div className="main">
          <div className="m-2 title flex flex-row gap-2 text-xl font-bold">
            <span>Q : </span>
            <p className="text-slate-800">{question.title}</p>
          </div>
          <div className="options p-2 grid grid-cols-2 gap-4 justify-center m-5 items-center">
            {question.options.map((option, index) => {
              return (
                <div
                  className={
                    index === selectedOption ? "option active" : "option"
                  }
                  key={index}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
        <div className="control grid justify-center items-center p-2">
          <button
            className="flex bg-gray-800 rounded-lg pl-2 pr-2 pt-1 pb-1 mt-5 items-center justify-center text-white text-md hover:scale-105 duration-200"
            onClick={goToNextQuestion}
          >
            {currentQuestion === totalQuestions ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};
