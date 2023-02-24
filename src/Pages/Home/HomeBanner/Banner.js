import React from 'react';
 import bgimg  from "../assets/homebanner.jpg";
 import { HashLink } from 'react-router-hash-link';
 
const Banner = () => {
    return (
      <div
        id="banner"
        className="hero min-h-screen  flex justify-start items-center"
        style={{
          backgroundImage: `url(${bgimg})`
        }}
      >
        <div className="  lg:pl-20  pl-14  text-left">
          <h2 className="text-xl text-white">Web-developer | Entrepreneur</h2>
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