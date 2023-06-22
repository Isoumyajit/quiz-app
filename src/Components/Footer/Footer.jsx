import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaDev } from "react-icons/fa";
export const Footer = () => {
  const year = 2023;
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-700 p-3 text-white">
      <div className="text-xs md:text-1xl">
        Designed and Developed with{" "}
        <span className="text-rose-600 text-semibold">&#x2764;</span> by{" "}
        <span className="text-teal-400 font-bannersign text-2xl">
          Soumyajit
        </span>
      </div>
      <div>
        <p className="text-xs">&#169;{year} All rights reserved</p>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <a
          href="https://github.com/iSoumyajit/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/soumyajit-chakraborty-914352121/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={20} />
        </a>

        {/* <FaDev size={20} /> */}
      </div>
    </div>
  );
};
