import React from 'react';

import skilimg from "./skill.png"



const Skill = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className=" mb-6 ">
              <img src={skilimg} alt=""  className='rounded-xl  '/>
            </div>
          </div>
          <div className="px-5 pt-6 pb-5 text-left lg:w-1/2">
            <h1 className=" text-5xl leading-[60px]   font-mediums font-semibold text-black    	">
              My mission is to <br /> create an impact <br />{" "}
              <span className="text-green-500"> globally</span>
            </h1>

            <p className="my-9  text-gray-600 text-lg">
              I am a passionate software developer dedicated to creating
              accessible and affordable tools that help individuals and
              organizations achieve their goals in the world of intention. My
              mission is to empower people from all walks of life by breaking
              down barriers to entry and making powerful resources readily
              available
            </p>

            <div className="list-none ">
              <div className="my-3">
                <h2 className="capitalize text-2xl font-semibold  ">
                  {" "}
                  Ninja at
                </h2>
                <div className="flex ">
                  <li className="  mr-2 text-sm font-serif  font-bold   pt-1">
                    JAVASCRIPT
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    REACT JS
                  </li>
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    NODE JS
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl font-semibold   ">
                  Front-end
                </h1>
                <div className="flex">
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    JAVASCRIPT
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    REACT JS
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    HTML/CSS
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    UI/UX DESIGN
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl font-semibold  ">
                  Back-end
                </h1>
                <div className="flex">
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    NODE Js
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    REST API
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    EXPRESS JS
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl  font-semibold  ">
                  Database
                </h1>
                <div className="flex">
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    MONGODB
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    FIREBASE
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h2 className="capitalize text-2xl font-semibold ">Payment</h2>
                <div className="flex">
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    STRIPE,{" "}
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl font-semibold  ">Cloud</h1>
                <div className="flex">
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    GOOGLE
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    VERCEL
                  </li>
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    NETLIFY{" "}
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl font-semibold  ">
                  Libraries
                </h1>
                <div className="flex">
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    TAILWIND CSS
                  </li>
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    BOOTSTRAP
                  </li>
                </div>
              </div>

              <div className="my-3">
                <h1 className="capitalize text-2xl font-semibold  ">Others</h1>
                <div className="flex">
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    GIT
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    GITHUB
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    FIGMA
                  </li>
                  <li className=" mr-2 text-sm font-serif  font-bold   pt-1 ">
                    WORDPRESS
                  </li>
                  <li className=" mr-2 text-sm  font-serif  font-bold  pt-1 ">
                    GOOGLE MAP
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Skill;