import React from 'react';
import  profile from "./Assests/profile-pic (17).png"
import resume  from "./Assests/Mahmudul (2) (12).pdf"

const About = () => {
    return (
      <div className="hero min-h-screen  py-11">
        <div className="hero-content flex-col lg:flex-row">
          <div className="bg-slate-50  mr-9  max-w-lg   ">
            <img src={profile} className=" rounded-3xl " />
          </div>
          <div className="text-left">
            <p className="text-xl">My specialization</p>
            <h2 className="text-5xl font-bold">
              I am a software <br />
              <span className="text-green-500"> engineer</span> who cares <br />
              about the code and the <br />
              people.
            </h2>

            <div className="list-none grid lg:grid-cols-2 my-11 text-xl md:grid-cols-2 grid-cols-1 gap-6">
              <li>UI/UX DESIGN</li>
              <li>WEB DEVELOPMENT</li>
              <li>FRONT-END DEVELOPMENT</li>
              <li>MERN-STACK DEVELOPMENT</li>
            </div>

            <div>
              <a href={resume} download="mahmudul_resumi.pdf">
                <button className=" p-3 rounded-lg w-60 text-lg font-bold  bg-green-500 text-black-400 uppercase">
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