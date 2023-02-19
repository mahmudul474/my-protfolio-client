import React from "react";
import { Link } from "react-router-dom";
import bg from "./Assests/projects.jpg";
const Projexts = () => {
  return (
    <div
      className="  p-9 h-screen overflow-y-scroll"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <h1
        className="text-left text-white
text-6xl pb-6  ml-14"
      >
        Latest projects
      </h1>

      <div className=" grid gap-8 lg:grid-cols-3 text-white mx-16 md:grid-cols-2 grid-cols-1 ">
        <div className="relative">
          <div className="border-2 border-gray-500   flex items-center">
            <div className="card p-4 ">
              <h3 className="text-2xl pb-2 capitalize text-center ">
                helllo programer
              </h3>
              <figure>
                <img
                  className="border-2 rounded-md"
                  src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="phot"
                />
              </figure>
              <div className="mb-12">
                <p>Project-Type: Client Projects </p>
                <p className="h-20 ">
                  This is a simple product management site where you can store
                  add, update or delete a categories and products This is a
                  simple product management site where you can store add, update
                  or delete a categories and products This is a simple product
                  management site where you can store add, update or delete a
                  categories and products This is a simple product management
                  site where you can store add, update or delete a categories
                  and products This is a simple product management site where
                  categories and products
                </p>
              </div>
            </div>
          </div>
          <button className="absolute left-1/2 transform -translate-x-1/2 flex items-center -bottom-4 px-4 py-2 bg-green-500 text-white rounded-md">
            See Dettails<span className="text-2xl">→</span>
          </button>
        </div>
        <div className="relative">
          <div className="border-2 border-gray-500   flex items-center">
            <div className="card p-4 ">
              <h3 className="text-2xl pb-2 capitalize text-center ">
                helllo programer
              </h3>
              <figure>
                <img
                  className="border-2 rounded-md"
                  src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="phot"
                />
              </figure>
              <div>
                <p>Project-Type: Client Projects </p>
                <p>
                  This is a simple product management site where you can store
                  add, update or delete a categories and products
                </p>
              </div>
            </div>
          </div>
          <button className="absolute left-1/2 transform -translate-x-1/2 flex items-center -bottom-4 px-4 py-2 bg-green-500 text-white rounded-md">
            See Dettails<span className="text-2xl">→</span>
          </button>
        </div>
        <div className="relative">
          <div className="border-2 border-gray-500   flex items-center">
            <div className="card p-4 ">
              <h3 className="text-2xl pb-2 capitalize text-center ">
                helllo programer
              </h3>
              <figure>
                <img
                  className="border-2 rounded-md"
                  src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="phot"
                />
              </figure>
              <div>
                <p>Project-Type: Client Projects </p>
                <p>
                  This is a simple product management site where you can store
                  add, update or delete a categories and products
                </p>
              </div>
            </div>
          </div>
          <button className="absolute left-1/2 transform -translate-x-1/2 flex items-center -bottom-4 px-4 py-2 bg-green-500 text-white rounded-md">
            See Dettails<span className="text-2xl">→</span>
          </button>
        </div>
        <div className="relative">
          <div className="border-2 border-gray-500   flex items-center">
            <div className="card p-4 ">
              <h3 className="text-2xl pb-2 capitalize text-center ">
                helllo programer
              </h3>
              <figure>
                <img
                  className="border-2 rounded-md"
                  src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="phot"
                />
              </figure>
              <div>
                <p>Project-Type: Client Projects </p>
                <p>
                  This is a simple product management site where you can store
                  add, update or delete a categories and products
                </p>
              </div>
            </div>
          </div>
          <button className="absolute left-1/2 transform -translate-x-1/2 flex items-center -bottom-4 px-4 py-2 bg-green-500 text-white rounded-md">
            See Dettails<span className="text-2xl">→</span>
          </button>
        </div>
      </div>

      <Link to="https://github.com/mahmudul474">
        <button className=" p-5 rounded-lg w-60 text-lg font-bold  bg-green-500 text-black uppercase">
         Visit My Github
        </button>
      </Link>
    </div>
  );
};

export default Projexts;
