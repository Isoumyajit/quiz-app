import React from "react";
import { useCollapse } from "react-collapsed";

export const QuizResult = ({ result, retry }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <>
      <div className="quiz-result grid justify-center items-center place-content-center">
        <div className="m-10 flex flex-col gap-5 justify-center items-center">
          {result.correct === 0 ? (
            <>
              <img
                src="https://img.icons8.com/fluency/150/disappointed.png"
                alt="disappointed"
              />
              <p className="text-red-400 font-bannersign font-semibold text-4xl">
                failed !!
              </p>
            </>
          ) : (
            <>
              <img
                src="https://img.icons8.com/3d-fluency/150/confetti.png"
                alt="confetti"
              />
              <p className="text-teal-400 font-bannersign font-semibold text-4xl">
                Congratulations !!
              </p>
            </>
          )}
          <p className=" font-semibold text-lg">
            Result : {result.percentage}%
          </p>
          <p className=" font-medium text-md">
            Selected {result.correct} correct options out of {result.total}
          </p>
          <div className="flex flex-row gap-5">
            <button
              className="bg-gray-800 pl-2 pr-2 pt-1 pb-1 rounded-lg text-white hover:scale-105 duration-200"
              onCLick={retry}
            >
              Retry
            </button>
            <button
              className="bg-teal-400 pl-2 pr-2 pt-1 pb-1 rounded-lg text-white hover:scale-105 duration-200"
              onCLick={retry}
            >
              View Answers
            </button>
          </div>
        </div>
      </div>
      {result.total !== result.correct && (
        <div className="feedback w-full p-3 border-t-2">
          <div className="collapsible">
            <div className="header" {...getToggleProps()}>
              {!isExpanded ? (
                <div className="flex flex-row gap-2">
                  <img
                    src="https://img.icons8.com/ios/30/circled-chevron-right--v1.png"
                    alt="circled-chevron-right--v1"
                  />
                  <p>Areas of Improvements</p>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <img
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/30/external-down-arrows-dreamstale-lineal-dreamstale.png"
                    alt="external-down-arrows-dreamstale-lineal-dreamstale"
                  />
                  <p> You can Follow the references below</p>
                </div>
              )}
            </div>
            <div {...getCollapseProps()}>
              <div className="feedback p-2 flex flex-col  gap-2 justify-start">
                {result.feedback.map((feedback, index) => (
                  <li key={index} className=" border-2 border-gray-600 p-2 ">
                    <a
                      href={feedback}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {feedback}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
