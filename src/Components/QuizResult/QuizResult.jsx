import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
export const QuizResult = ({ result }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: 300,
      sm: 500,
      md: 700,
      lg: 900,
      xl: 1200,
    },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {result.questions.map((ques, index) => (
            <li className="list-none m-1" key={index}>
              <div className="p-2 flex flex-row justify-between items-center gap-2 border-2 border-slate-200">
                <div className="">
                  <div className="flex flex-row gap-2">
                    <span>Q:</span>
                    <p>{ques.title}</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span>Ans:</span>
                    <p>{ques.options[ques.correctoptionindex]}</p>
                  </div>
                </div>
                <div>
                  {result.markedanswer[index] === ques.correctoptionindex ? (
                    <CheckIcon />
                  ) : (
                    <CloseIcon />
                  )}
                </div>
              </div>
            </li>
          ))}
        </Box>
      </Modal>
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
              onClick={() => navigate("/topics")}
            >
              Retry
            </button>
            <button
              className="bg-teal-400 pl-2 pr-2 pt-1 pb-1 rounded-lg text-white hover:scale-105 duration-200"
              onClick={handleOpen}
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
