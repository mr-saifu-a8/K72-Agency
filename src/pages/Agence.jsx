import React from 'react'

function Agence() {
  return (
    <div>
      <div className="section1">
        <div className="w-[15vw] h-[20vw] rounded-3xl overflow-hidden bg-red-600 absolute top-[14vw] left-[30vw]">
          <img
            className="w-full h-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="text-center mt-[55vh]">
            <h1 className="text-[20vw] leading-[17vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="pl-[37%] pr-20">
            <p className="text-6xl indent-[19vw]">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
}

export default Agence