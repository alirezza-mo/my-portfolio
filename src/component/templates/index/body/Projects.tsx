import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function Projects() {
  return (
    <>
      <section className="flex flex-col items-center  w-full gap-10 my-10">
        <div className="w-full flex items-center justify-start">
          <h2 className="text-3xl font-bold text-headingTextLight dark:text-headingTextDark ">
            {" "}
            پروژه های من :
          </h2>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col items-center justify-center gap-8">
          <div className="md:w-[500px] h-[500px] w-80 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-2xl rounded-lg shadow-xl">
            <div className="h-[50%] w-full ">
              <span className="absolute text-yellow-400 text-xs px-2 right-5 top-4 bg-yellow-400/30 flex items-center justify-center rounded-xl w-fit ">
                Featured
                <CiStar className="text-yellow-500 text-xl " />
              </span>
              <Image
                src={"/images/4k-club.png"}
                alt="4k-club"
                width={500}
                height={192}
                className="rounded-t-lg w-full h-full"
              />
            </div>
            <div className="p-3">
              <h4 className="text-headingTextLight dark:text-headingTextDark font-bold text-2xl">
                وبسایت 4K-club
              </h4>
              <p className="text-bodyTextLight dark:text-bodyTextDark font-light py-3 text-xs md:text-sm leading-6">
                جهت ایجاد افزایش رقابت بین پلیر های گیم نت بوجود آمده است. این
                پروژه بصورت Full stack توسعه داده شده است که برای سرویس چت
                آنلاین ان از Pusher نیز استفاده شده است.
              </p>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  ShadCn
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  MongoDB
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Liara
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  TailwindCss
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Pusher
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Next.JS
                </span>
              </div>
              <div className="py-3 flex items-center justify-start gap-2 w-full">
                <Link
                  href={"https://github.com/alirezza-mo/club-4k"}
                  className="text-purple-600 dark:text-purple-300 p-1 text-xs flex items-center justify-center gap-1 transition-all  bg-headingTextDark/20 hover:bg-headingTextDark hover:text-white cursor-pointer rounded-xl"
                >
                  <FaGithub className="text-base " />
                  دیدن سورس
                </Link>
                <Link
                  target="_blank"
                  href={"https://club-4k.vercel.app/"}
                  className=" text-bodyTextLight bg-accentLight dark:bg-accentDark rounded-xl p-1 text-xs flex items-center justify-center gap-1 transition-colors shadow-sky-400 hover:shadow-sm "
                >
                  {" "}
                  <GoLinkExternal className="text-base " />
                  تماشای پروژه
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] h-[500px] w-80 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-2xl rounded-lg shadow-xl">
            <div className="h-[50%] w-full ">
              <span className="absolute text-yellow-500  px-2 left-5 top-4 backdrop-blur-2x bg-yellow-300/50 flex items-center justify-center rounded-xl w-fit ">
                Featured
                <CiStar className="text-yellow-500 text-2xl " />
              </span>
              <Image
                src={"/images/gameLand.png"}
                alt="4k-club"
                width={500}
                height={192}
                className="rounded-t-lg w-full h-full"
              />
            </div>
            <div className="p-3">
              <h4 className="text-headingTextLight dark:text-headingTextDark font-bold text-2xl">
                وبسایت گیم لند
              </h4>
              <p className="text-bodyTextLight dark:text-bodyTextDark font-light py-3 text-xs md:text-sm leading-6">
                پروژه فروشگاهی gameLand توسعه داده شده با React , TailwindCss با
                دیزاین حرفه ای و جذاب و بسیار کاربر پسند است. توجه به نیاز های
                کاربر از مهم ترین ویژگی های بود که زمان مناسبی صرف آن شده است.
              </p>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  MaterialUI
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  TailwindCss
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  React
                </span>
              </div>
              <div className="py-3 flex items-center justify-start gap-2 w-full">
                <Link
                  href={"https://github.com/alirezza-mo/game-land"}
                  className="text-purple-600 dark:text-purple-300 p-1 text-xs flex items-center justify-center gap-1 transition-all  bg-headingTextDark/20 hover:bg-headingTextDark hover:text-white cursor-pointer rounded-xl"
                >
                  <FaGithub className="text-base " />
                  دیدن سورس
                </Link>
                {/* <Link
                  href={""}
                  className=" text-bodyTextLight bg-accentLight dark:bg-accentDark rounded-xl p-1 text-xs flex items-center justify-center gap-1 transition-colors shadow-sky-400 hover:shadow-sm "
                >
                  {" "}
                  <GoLinkExternal className="text-base " />
                  تماشای پروژه
                </Link> */}
              </div>
            </div>
          </div>
          <div className="md:w-[500px] h-[500px] w-80 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-2xl rounded-lg shadow-xl">
            <div className="h-[50%] w-full ">
              {/* <span className="absolute text-yellow-500  px-2 right-5 top-4 backdrop-blur-2x bg-yellow-300/50 flex items-center justify-center rounded-xl w-fit ">
                Featured
                <CiStar className="text-yellow-500 text-2xl " />
              </span> */}
              <Image
                src={"/images/student.png"}
                alt="4k-club"
                width={500}
                height={192}
                className="rounded-t-lg w-full h-full"
              />
            </div>
            <div className="p-3">
              <h4 className="text-headingTextLight dark:text-headingTextDark font-bold text-2xl">
                وبسایت آموزشی فست لرن
              </h4>
              <p className="text-bodyTextLight dark:text-bodyTextDark font-light py-3 text-xs md:text-sm leading-6">
                پروژه آموزشی فست لرن که بعد از یادگیری React آن را کدنویسی کردم
                که هم برای تثبیت این تکنولوژی و هم به چالش کشیدن خودم برای یک
                پروژه ای که داری CMS دارد. از ویژگی های این پروژه، ماژولار بودن آن است که از اصل DRY پیروی شده است.
              </p>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  sass
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Parallel
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Rechart
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  Bootstrap
                </span>
                <span className="bg-headingTextLight/50 rounded-2xl px-2 py-1 text-purple-700 dark:text-purple-400 text-xs">
                  React
                </span>
              </div>
              <div className="py-3 flex items-center justify-start gap-2 w-full">
                <Link
                  href={"https://github.com/alirezza-mo/educational-"}
                  className="text-purple-600 dark:text-purple-300 p-1 text-xs flex items-center justify-center gap-1 transition-all  bg-headingTextDark/20 hover:bg-headingTextDark hover:text-white cursor-pointer rounded-xl"
                >
                  <FaGithub className="text-base " />
                  دیدن سورس
                </Link>
                {/* <Link
                  href={""}
                  className=" text-bodyTextLight bg-accentLight dark:bg-accentDark rounded-xl p-1 text-xs flex items-center justify-center gap-1 transition-colors shadow-sky-400 hover:shadow-sm "
                >
                  {" "}
                  <GoLinkExternal className="text-base " />
                  تماشای پروژه
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
