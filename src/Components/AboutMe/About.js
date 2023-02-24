import React from 'react';
import  profile from "./Assests/profile-pic (17).png"
import resume  from "./Assests/Mahmudul (2) (12).pdf"

const About = () => {
    return (
      <div id='about' className="hero    py-11">
        <div className="hero-content pl-6 lg:flex-row  flex-col ">
          <div className="bg-slate-50  lg:mr-36   ">
            <img src={profile} className="w-full" alt="f" />
          </div>
          <div className="text-left">
            <p className="text-xl">My specialization</p>
            <h2 className="text-5xl font-semibold">
              I am a web<br />
              <span className="text-green-500"> Developer</span> who cares <br />
              about the code and the <br />
              people.
            </h2>

            <div className="list-none grid lg:grid-cols-2 my-11 text-md font-semibold md:grid-cols-2 grid-cols-1 gap-6">
              <li>UI/UX DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>FRONT-END DEVELOPMENT</li>
              <li>MERN-STACK DEVELOPMENT</li>
            </div>

            <div>
              <a href={resume} download="mahmudul_resumi.pdf">
                <button className=" p-3 font-semibold rounded-sm w-60 text-lg   bg-green-500 text-black-400 uppercase">
                  Download-Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;