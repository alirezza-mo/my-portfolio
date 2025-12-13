"use client";
import { LuMoonStar } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showMenu = (): void => {
    setIsOpen((prev) => !prev);
  };
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
            <button aria-label="Toggle Theme">
              <LuMoonStar className="text-gray-600 text-2xl transition-all hover:text-white cursor-pointer" />
            </button>
            <h3 className="font-bold text-2xl lg:text-4xl font-sans text-gray-200">
              {" "}
              my portfolio{" "}
            </h3>
          </div>
          <div className="md:hidden flex text-4xl px-2 items-center justify-between">
            <motion.button onClick={showMenu} aria-label="Open Menu">
              <FaBars className="text-white" />
            </motion.button>
            <h3 className="font-bold text-xl sm:text-4xl font-sans text-gray-200">
              {" "}
              my portfolio{" "}
            </h3>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, translateX: "0%" }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 100 }}
              className=" w-full h-screen transition-all"
            >
              <div className="z-50 flex flex-col items-start justify-between md:hidden absolute right-0 top-0 bottom-0 h-screen w-[60%] bg-bgLight  p-3">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-3xl text-gray-600 font-bold font-serif">
                    {" "}
                    my portfolio{" "}
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-center gap-8">
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    خانه{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    پروژه{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    مهارت ها{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    رزومه{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    وبلاگ{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    ارتباط با من{" "}
                  </Link>
                  <Link
                    href={"/"}
                    className="text-center p-1 text-gray-500 transition-all active:text-orange-600 active:bg-orange-400/50 rounded-lg "
                  >
                    {" "}
                    درباره من{" "}
                  </Link>
                </div>
                <div className="flex w-full items-center justify-between">
                  <button
                    className="rounded-full text-center bg-orange-600/60 p-2  text-white cursor-pointer"
                    aria-label="Theme Toggle"
                  >
                    <LuMoonStar className="text-3xl" />
                  </button>
                  <button
                    className="rounded-full text-center bg-orange-600/60 p-2  text-white cursor-pointer"
                    onClick={showMenu}
                    aria-label="Close Menu"
                  >
                    <HiArrowLeftStartOnRectangle className="text-3xl" />
                  </button>
                </div>
              </div>
              <div
                className="z-40 flex flex-col md:hidden absolute left-0 top-0 bottom-0 h-screen w-[40%] backdrop-blur-3xl"
                onClick={showMenu}
              >
                {" "}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
