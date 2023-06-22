import React from "react";
import QuestionList from "../../Json/Questions.json";
import { useNavigate } from "react-router-dom";

export const Topics = () => {
  const navigate = useNavigate();
  return (
    <div className="grid justify-center items-center place-content-center">
      <div className="flex flex-col gap-5 p-5 m-5">
        <p className="text-lg font-semibold">Hi , Threre </p>
        <p className="text-md font-normal">
          {" "}
          Please choose a topic from below !!{" "}
        </p>
      </div>
      <div>
        <button
          className="p-2 bg-slate-700 text-white"
          onClick={() => navigate("/quiz")}
        >
          Start
        </button>
      </div>
    </div>
  );
};
