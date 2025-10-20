import React from "react";
import Video from "./Video";

const HeroText = () => {
  return (
    <div className="font-[font1] text-center  text-white">
      <div className="uppercase text-[9.5vw] leading-[9vw]">The spark for</div>
      <div className="uppercase text-[9.5vw] gap-5 flex items-center justify-center  leading-[9vw] ">
        all
        <div className="w-[13.5vw] overflow-hidden rounded-full">
          <Video />
        </div>
        things
      </div>
      <div className="uppercase text-[9.5vw] leading-[9vw]">creative</div>
    </div>
  );
};

export default HeroText;
