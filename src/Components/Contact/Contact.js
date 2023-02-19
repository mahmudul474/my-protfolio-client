import React from 'react';
import  contactbg from "./contact.jpg"





const Contact = () => {
    return (
      <div
        className=" min-h-screen flex justify-between  pb-32 items-center lg:flex-row"
        style={{
          backgroundImage: `url(${contactbg})`
        }}
      >
        <div className="w-full text-yellow-50 lg:w-1/2 ml-16 text-left">
          <div className=" ">
            <h1 className="text-3xl  font-bold mb-16 ">Contact</h1>
            <p className="text-gray-200 mb-10">
              The universe is a pretty big place. If it's just us.
            </p>
          </div>

          <div className="flex-col3">
            <h1 className='text-4xl mb-8'>
              Narayongonj, Dhaka, <br /> <span className='text-green-500'> Bangladesh</span>
            </h1>
            <h1 className='text-4xl mb-8'>
              <a href="tel:+8801906479710">+8801906479710</a>
            </h1>
            <h2>
              <a href="mailto:mdmahmudulla474@gmail.com">
                mdmahmudulla474@gmail.com
              </a>
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-32">
          <h1 className=" w-4/6 text-left text-3xl text-bold text-white">
            Let's grab a coffee and jump <br /> on conversation{" "}
            <span className="text-green-500">chat with me.</span>
          </h1>

          <div className="flex flex-col space-y-4   w-4/6">
            <input
              type="text"
              className="border-b-2 py-5 border-gray-500  my-6 bg-transparent focus:outline-none  focus:bg-slate-50    text-black  px-3  rounded-md"
              placeholder="Name"
            />
            <input
              type="email"
              className="border-b-2 focus:outline-none rounded-md p-5 border-gray-500 bg-transparent focus:bg-slate-50 my-6  py-5 text-black   px-3"
              placeholder="Email"
            />
            <textarea
              className="border-b-2 focus:bg-white my-6 rounded-md p-8 border-gray-500  focus:out bg-transparent  s text-black py-9 px-3 outline-none"
              placeholder="Message"
            />

            <button className=" p-5 rounded-lg w-60 text-lg font-bold  bg-green-500 text-black uppercase">
              contact-me
            </button>
          </div>
        </div>
      </div>
    );
};

export default Contact;