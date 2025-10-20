import React from "react";
import { Link } from "react-router-dom";
import MontrealTime from "./MontrealTime";

const BottomText = () => {
  return (
    <div>
      <div className="text-[5vh] text-white">
        <h1 className="absolute top-[94.5vh] left-2"><MontrealTime/></h1>
      </div>
      <div className="relative font-[font2] flex gap-6 items-center justify-center py-4">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center  hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6vw] uppercase border-3 border-white rounded-full px-[2vw] pt-2 leading-none text-white"
        >
          projects
        </Link>
        <Link
          to="/agence"
          className="inline-flex hover:border-[#D3FD50] hover:text-[#D3FD50] items-center justify-center text-[6vw] uppercase border-3 border-white rounded-full px-[2vw] pt-2 leading-none text-white"
        >
          agence
        </Link>
      </div>
    </div>
  );
};

export default BottomText;
