import React from 'react';
import "./Media.css"
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiGmail}from "react-icons/si"
const Media = () => {
  return (
    <div className=" flex fixed-bottom-right text-2xl ">
      <a href="https://www.linkedin.com/in/mahmudul474/">
        <span className="rounded-full p-1  hover:text-green-500 border-none  outline-none ">
          <AiFillLinkedin />
        </span>
      </a>
      <a href="https://github.com/mahmudul474">
        <span className="rounded-full p-1  hover:text-green-500 border-none  outline-none ">
          <AiFillGithub></AiFillGithub>
        </span>
      </a>
      <a href="https://www.facebook.com/devloperSobujHasan/">
        <span className="rounded-full p-1  hover:text-green-500 border-none  outline-none ">
          <AiFillFacebook></AiFillFacebook>
        </span>
      </a>
      <a href="mailto:mdmahmudulla474@gmail.com">
        <span className="rounded-full p-1  hover:text-green-500 border-none  outline-none ">
          <SiGmail></SiGmail>
        </span>
      </a>
    </div>
  );
};

export default Media;