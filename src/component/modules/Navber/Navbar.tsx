"use client";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme: boolean = !isDark;
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(newTheme);
  };

  return (
    <>
      <nav className=" w-full flex justify-center z-50">
        <div className="z-50 fixed w-full mx-5 xl:w-[1240px] lg:w-[900px] md:w-[700px] bg-transparent md:flex items-center justify-between mt-5 backdrop-blur-xl p-2 rounded-2xl">
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
            {/* <button aria-label="Toggle Theme" onClick={toggleTheme}>
              <LuMoonStar className="text-gray-600 text-2xl transition-all hover:text-white cursor-pointer" />
            </button> */}
            <AnimatePresence initial={false}>
              {isDark ? (
                <motion.button aria-label="Toggle Theme" onClick={toggleTheme}  >
                  <LuSun className="text-gray-600 text-2xl transition-all hover:text-white cursor-pointer" />
                </motion.button>
              ) : (
                <button aria-label="Toggle Theme" onClick={toggleTheme}>
                  <LuMoonStar className="text-gray-600 text-2xl transition-all hover:text-white cursor-pointer" />
                </button>
              )}
            </AnimatePresence>
            <h3 className="font-bold text-2xl lg:text-4xl font-sans text-gray-200">
              {" "}
              my portfolio{" "}
            </h3>
          </div>
          <div className="md:hidden flex text-4xl px-2 items-center justify-between z-50">
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
              initial={{ opacity: 0, translateX: "100%" }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 100 }}
              className=" w-full min-h-screen transition-all fixed z-50"
            >
              <div className="z-50 flex flex-col items-start justify-between md:hidden absolute right-0 top-0 bottom-0 h-screen w-[60%] bg-bgLight dark:bg-gray-800  p-3">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-3xl text-gray-600 dark:text-gray-400 font-bold font-serif">
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
                    className="rounded-full text-center bg-orange-600/60 p-2  text-white dark:text-gray-300 cursor-pointer"
                    aria-label="Theme Toggle"
                    onClick={toggleTheme}
                  >
                    <LuMoonStar className="text-3xl" />
                  </button>
                  <button
                    className="rounded-full text-center bg-orange-600/60 p-2  text-white dark:text-gray-300 cursor-pointer"
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
