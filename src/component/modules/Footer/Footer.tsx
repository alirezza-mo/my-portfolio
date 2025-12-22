import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-around w-full bg-surfaceLight p-8 gap-5 dark:bg-surfaceDark">
        <div className="flex flex-row flex-wrap  md:flex-col items-center justify-center gap-2 text-bodyTextLight dark:text-black">
          <Link
            href={"/"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            خانه{" "}
          </Link>
          <Link
            href={"/projects"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            پروژه{" "}
          </Link>
          <Link
            href={"/resume"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            رزومه{" "}
          </Link>
          <Link
            href={"/blog"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            وبلاگ{" "}
          </Link>
          <Link
            href={"/contact"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            ارتباط با من{" "}
          </Link>
          <Link
            href={"/about-me"}
            className="w-24 text-center rounded-lg bg-accentLight dark:bg-accentDark p-1 hover:bg-bodyTextLight transition-all hover:text-accentLight  shadow-2xl/30 dark:hover:shadow-sky-300 shadow-md dark:hover:text-black  "
          >
            {" "}
            درباره من{" "}
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-8 ">
          <h3 className="md:text-5xl text-3xl font-black text-headingTextLight dark:text-headingTextDark text-shadow-lg"> علیرضا مرادی </h3>
          <p className="font-extralight text-bodyTextLight w-96 text-shadow-lg md:text-base text-sm p-8 md:p-0 dark:text-bodyTextDark">
            {" "}
            برنامه‌نویس فرانت‌اند متخصص، خلق‌کننده رابط‌های کاربری پیشرفته،
            واکنش‌گرا و تجربه‌های دیجیتال ماندگار و حرفه‌ای{" "}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-xs text-headingTextLight dark:text-headingTextDark">شبکه های مجازی من :</h4>
          <div className="flex flex-row flex-wrap md:flex-col items-center justify-center gap-2">
            <button className="text-headingTextDark  flex items-center justify-center gap-2 text-2xl font-extralight transition-all  bg-headingTextDark/10 hover:bg-headingTextDark hover:text-white cursor-pointer p-1 rounded-lg">
              <FaTelegramPlane className="text-blue-500" /> | telegram
            </button>
            <button className="text-headingTextDark  flex items-center justify-center gap-2 text-2xl font-extralight transition-all  bg-headingTextDark/10 hover:bg-headingTextDark hover:text-white cursor-pointer p-1 rounded-lg ">
              <FaInstagram className="text-purple-600" /> | instagram
            </button>
            <button className="text-headingTextDark  flex items-center justify-center gap-2 text-2xl font-extralight transition-all  bg-headingTextDark/10 hover:bg-headingTextDark hover:text-white cursor-pointer p-1 rounded-lg">
              <CiLinkedin className="text-blue-600" /> | linkedin
            </button>
            <button className="text-headingTextDark  flex items-center justify-center gap-2 text-2xl font-extralight transition-all  bg-headingTextDark/10 hover:bg-headingTextDark hover:text-white cursor-pointer p-1 rounded-lg">
              <FiGithub className="text-black dark:text-bodyTextDark" /> | github
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
