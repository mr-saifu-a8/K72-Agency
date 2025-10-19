import React from "react";
import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="font-[font2] flex gap-6 items-center justify-center py-4">
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
  );
};

export default BottomText;
