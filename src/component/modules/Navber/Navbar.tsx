import React from "react";
import { LuMoonStar } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <nav className="absolute w-full flex justify-center z-50">
        <div className="fixed w-full mx-5 xl:w-[1240px] lg:w-[900px] md:w-[700px] bg-transparent md:flex items-center justify-between mt-5 backdrop-blur-xl p-2 rounded-2xl">
          <ul className="hidden  md:flex items-center justify-center gap-4 text-gray-300 ">
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              خانه{" "}
            </li>
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              پروژه{" "}
            </li>
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              رزومه{" "}
            </li>
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              وبلاگ{" "}
            </li>
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              ارتباط با من{" "}
            </li>
            <li className="transition-all hover:text-gray-200 active:text-gray-200 cursor-pointer">
              {" "}
              درباره من{" "}
            </li>
          </ul>
          <div className="hidden md:flex items-center justify-center gap-5 xl:gap-28">
            <button>
              <LuMoonStar className="text-gray-600 text-2xl transition-all hover:text-white cursor-pointer" />
            </button>
            <h3 className="font-bold text-2xl lg:text-4xl font-sans text-gray-200">
              {" "}
              my portfolio{" "}
            </h3>
          </div>
          <div className="md:hidden flex text-4xl px-2 items-center justify-between">
            <button>
              <FaBars className="text-white"/>
            </button>
            <h3 className="font-bold text-2xl sm:text-4xl font-sans text-gray-200">
              {" "}
              my portfolio{" "}
            </h3>
          </div>
        </div>
        <div className="hidden md:flex "></div>
      </nav>
    </>
  );
}

export default Navbar;
