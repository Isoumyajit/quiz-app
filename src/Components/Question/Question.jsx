import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./Question.css"
export const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  setAnswer,
}) => {
  console.log(currentQuestion)
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const goToNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => { setAnswer(selectedOption) })
    setSelectedOption(null);
  };
  useEffect(() => {
    if(currentQuestion !== 0 ) progressBar.current.classList.remove("progressbar-active");
    setTimeout(() => {
      progressBar.current.classList.add("progressbar-active");
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 20 * 1000);
    return goToNextQuestion;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  return (
    <>
      <div className="question">
        <div className="progress-bar" ref={progressBar}></div>
        <div className="question-count">
          <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
        </div>
        <div className="main ">
          <div className="m-2 title flex flex-row gap-2 text-xl font-bold">
            <span>Q : </span>
            <p className="text-slate-800">{question.title}</p>
          </div>
          <div className="options p-2 grid grid-cols-2 justify-center m-10 items-center">
            {question.options.map((option, index) => {
              return (
                  <div
                    className={`bg-gray-200 flex p-2 mt-5 rounded-lg w-64 hover:bg-violet-700 cursor-pointer hover:scale-105 duration-200
                    index === selectedOption ? "option active" : "option"`}
                    key={index}
                    onClick={() => setSelectedOption(index)}
                  >
                    {option}
                  </div>
              );
            })}
          </div>
        </div>
        <div className="control grid justify-center items-center">
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
