// import React, { useRef } from "react";

// const Navbar = () => {
//   const navGreenRef = useRef();
//   return (
//     <div className="flex fixed top-0 w-full items-start justify-between  z-40">
//       <div className="w-35 p-2 h-17 ">
//         <svg
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 103 44"
//         >
//           <path
//             fill="white"
//             fillRule="evenodd"
//             d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
//           ></path>
//         </svg>
//       </div>
//       <div
//         onMouseEnter={() => {
//           navGreenRef.current.style.height = "100%";
//         }}
//         onMouseLeave={() => {
//           navGreenRef.current.style.height = "0%";
//         }}
//         className="h-14 w-[15.4vw] flex justify-end items-center relative bg-black"
//       >
//         <div>
//           <div className="bigline w-13 h-[1.5px] mr-7 mb-1 bg-white"></div>
//           <div className="smallline w-7 h-[1.5px] ml-6 my-1  bg-white"></div>
//         </div>
//         <div
//           ref={navGreenRef}
//           className="w-full bg-[#D3FD50] transition-all text-black h-0 absolute top-0"
//         ></div>
//         <div className="relative"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-40">
      {/* Logo */}
      <div className="w-35 p-2 h-17">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>

      {/* Hamburger + Hover effect */}
      <div className="h-14 w-[15.4vw] flex justify-end items-center relative group bg-black">
        {/* Lines */}
        <div className="relative z-20 flex flex-col">
          <div className="bigline w-13 h-[1.5px] mr-7 mb-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
          <div className="smallline w-7 h-[1.5px] ml-6 my-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
        </div>

        {/* Green overlay */}
        <div className="w-full bg-[#D3FD50] absolute top-0 left-0 h-0 group-hover:h-full transition-all duration-100 ease-in-out z-10"></div>
      </div>
    </div>
  );
};

export default Navbar;
