import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Stairs = (props) => {
  const currentPath = useLocation().pathname

  const stariParentRef = useRef(null);
  const pageRef = useRef(null)

  useGSAP(function () {
    const tl = gsap.timeline();
    tl.to(stariParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(stariParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      // scale: 1
    })
  },[currentPath]);
  return (
    <div>
      <div ref={stariParentRef} className="h-screen w-full fixed z-10 top-0">
        <div className="w-full flex h-full">
          <div className="stair h-full w-1/2 bg-black"></div>
          <div className="stair h-full w-1/2 bg-black"></div>
          <div className="stair h-full w-1/2 bg-black"></div>
          <div className="stair h-full w-1/2 bg-black"></div>
          <div className="stair h-full w-1/2 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
      {props.children}
      </div>
    </div>
  );
};

export default Stairs;
