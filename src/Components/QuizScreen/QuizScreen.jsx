import React, { useState } from "react";
import QuestionList from "../../Json/Questions.json";
import { QuizResult } from "../QuizResult/QuizResult";
import { Question } from "../Question/Question";
import "../QuizScreen/QuizScreen.css"
export const QuizScreen = ({ retry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(
    new Array(QuestionList.length)
  );

  const calculateResult = () => {
    let correct = 0;
    let wrongresponse = [];
    console.log(markedAnswer);
    QuestionList.forEach((question, index) => {
      if (question.correctoptionindex === markedAnswer[index]) {
        correct++;
      }
    });
    for (let index = 0; index < QuestionList.length; index++) {
      if (markedAnswer[index] !== QuestionList[index].correctoptionindex)
        wrongresponse.push(QuestionList[index].recommendation);
    }

    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
      feedback: wrongresponse,
    };
  };
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <>
      <div className="quiz-screen">
        {console.log(currentQuestionIndex)}
        {isQuestionEnd ? (
          <QuizResult result={calculateResult()} retry={() => retry} />
        ) : (
          <Question
            question={QuestionList[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex}
            totalQuestions={QuestionList.length}
            setAnswer={(index) => {
              setMarkedAnswer((arr) => {
                let newarr = [...arr];
                newarr[currentQuestionIndex] = index;
                return newarr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          />
        )}
      </div>
    </>
  );
};
