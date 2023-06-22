import React, { useState } from "react";
import QuestionList from "../../Json/Questions.json";
import { QuizResult } from "../QuizResult/QuizResult";
import { Question } from "../Question/Question";
import "../QuizScreen/QuizScreen.css"
export const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(
    new Array(QuestionList.length)
  );

  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <div className="quiz-screen">
      {console.log(currentQuestionIndex)}
      {isQuestionEnd ? (
        <QuizResult />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex}
          totalQuestions={QuestionList.length - 1}
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
  );
};
