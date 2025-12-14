import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-around w-full bg-white p-8 gap-5 dark:bg-gray-800">
        <div className="flex flex-row flex-wrap  md:flex-col items-center justify-center gap-1 text-orange-700">
          <Link
            href={"/"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            خانه{" "}
          </Link>
          <Link
            href={"/projects"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            پروژه{" "}
          </Link>
          <Link
            href={"/resume"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            رزومه{" "}
          </Link>
          <Link
            href={"/blog"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            وبلاگ{" "}
          </Link>
          <Link
            href={"/contact"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            ارتباط با من{" "}
          </Link>
          <Link
            href={"/about-me"}
            className="w-24 text-center rounded-lg bg-orange-300 p-1 hover:bg-orange-400 transition-all hover:text-orange-100 active:bg-orange-400 active:text-white shadow-2xl/30"
          >
            {" "}
            درباره من{" "}
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-8 ">
          <h3 className="md:text-5xl text-3xl font-black text-gray-400 text-shadow-lg"> علیرضا مرادی </h3>
          <p className="font-extralight text-black w-96 text-shadow-lg md:text-base text-sm p-8 md:p-0 dark:text-white">
            {" "}
            برنامه‌نویس فرانت‌اند متخصص، خلق‌کننده رابط‌های کاربری پیشرفته،
            واکنش‌گرا و تجربه‌های دیجیتال ماندگار و حرفه‌ای{" "}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-xs text-orange-600 dark:text-gray-400">شبکه های مجازی من :</h4>
          <div className="flex flex-row flex-wrap md:flex-col items-center justify-center gap-2">
            <button className="text-black dark:text-white dark:hover:text-orange-700 flex items-center justify-center gap-2 text-2xl font-extralight transition-all hover:bg-orange-200 cursor-pointer p-1 rounded-lg">
              <FaTelegramPlane className="text-blue-500" /> | telegram
            </button>
            <button className="text-black dark:text-white dark:hover:text-orange-700 flex items-center justify-center gap-2 text-2xl font-extralight transition-all hover:bg-orange-200 cursor-pointer p-1 rounded-lg ">
              <FaInstagram className="text-purple-600" /> | instagram
            </button>
            <button className="text-black dark:text-white dark:hover:text-orange-700 flex items-center justify-center gap-2 text-2xl font-extralight transition-all hover:bg-orange-200 cursor-pointer p-1 rounded-lg">
              <CiLinkedin className="text-blue-600" /> | linkedin
            </button>
            <button className="text-black dark:text-white dark:hover:text-orange-700 flex items-center justify-center gap-2 text-2xl font-extralight transition-all hover:bg-orange-200 cursor-pointer p-1 rounded-lg">
              <FiGithub className="text-black" /> | github
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
