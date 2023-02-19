import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const [isSticky, setIsSticky] = useState(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    setIsSticky(true);
  } else {
    setIsSticky(false);
  }
};
useEffect(()=>{
   window.addEventListener("scroll", handleScroll);
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
},[])

  return (
    <nav
      className={`${
        isSticky ? "bg-transparent shadow-md" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-10`}
    >
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div className=" flex justify-between">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <span class="ml-2 text-2xl  tracking-wide text-gray-100 uppercase">
                Hasan.S
              </span>
            </Link>
            <ul class="flex items-center ml-16 hidden space-x-8 lg:flex">
              <li>
                <a
                  href="tel:+8801906479710"
                  aria-label="phone number"
                  title="phone number"
                  class="font-medium hover:underline tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 text-sm"
                >
                  +8801906479710
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdmahmudulla474@gmail.com"
                  aria-label="gmail"
                  title="gmail"
                  class="font-medium tracking-wide text-sm text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:underline"
                >
                  mdmahmudulla474@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <button onClick={toggleMenu}>
              <svg className="w-9 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            <div
              className={`fixed top-0 right-0 h-screen w-1/3 bg-gray-800 z-50 transition-all duration-500 transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                aria-label="Close Menu"
                title="Close Menu"
                class="p-4 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 flex   focus:outline-none focus:shadow-outline"
                onClick={() => setMenuOpen(false)}
              >
                <svg class="w-9  text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </button>

              <ul className="mt-16">
                <li className="text-white hover:text-gray-300 py-4">Home</li>
                <li className="text-white hover:text-gray-300 py-4">About</li>
                <li className="text-white hover:text-gray-300 py-4">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
