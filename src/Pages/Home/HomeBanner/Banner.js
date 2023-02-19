import React from 'react';
 import bgimg  from "../assets/homebanner.jpg"
 
const Banner = () => {
    return (
      <div
        className="hero min-h-screen  flex justify-start items-center"
        style={{
          backgroundImage: `url(${bgimg})`
        }}
      >
        <div className=" pl-20 text-left">
          <h2 className="text-xl text-white">
            Software Engineer | Entrepreneur
          </h2>
          <h1 className="lg:text-[90px] md:text-[70px] text-6xl  text-white font-semibold ">
            <span className="text-green-500">Hi,</span> I'm
          </h1>
          <h1 className="lg:text-[90px] md:text-[70px] text-6xl  text-white font-semibold ">
            Mahmudul
          </h1>
          <h1 className="lg:text-[90px] md:text-[70px] text-6xl  text-white font-semibold ">
            Hasan
          </h1>
          <span className="w-40 h-1 mt-11 bg-green-500  block "></span>
        </div>
      </div>
    );
};

export default Banner;