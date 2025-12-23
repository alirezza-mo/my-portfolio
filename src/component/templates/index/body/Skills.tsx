"use client";
import React, { useState } from "react";
import { DiStylus } from "react-icons/di";
import {
  FaBootstrap,
  FaCode,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoCodeOutline, IoCodeSlashSharp, IoStatsChart } from "react-icons/io5";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPwa, SiRedux, SiTypescript } from "react-icons/si";

function Skills() {
  const [isActiveReact, setIsActiveReact] = useState<boolean>(false);
  const [isActiveNext, setIsActiveNext] = useState<boolean>(false);
  const [isActiveJs, setIsActiveJs] = useState<boolean>(false);
  const [isActiveRedux, setIsActiveRedux] = useState<boolean>(false);
  const [isActiveTailwind, setIsActiveTailwind] = useState<boolean>(false);
  const [isActiveTs, setIsActiveTs] = useState<boolean>(false);
  const [isActivePwa, setIsActivePwa] = useState<boolean>(false);
  const [isActiveTesting, setIsActiveTesting] = useState<boolean>(false);
  const [isActiveGit, setIsActiveGit] = useState<boolean>(false);
  const [isActiveBootstrap, setIsActiveBootstrap] = useState<boolean>(false);
  const [isActiveSass, setIsActiveSass] = useState<boolean>(false);
  // const [isActiveCanvas, setIsActiveCanvas] = useState<boolean>(false);
  const [isActiveShodCn, setIsActiveShodCn] = useState<boolean>(false);
  const [isActiveHtmlCss, setIsActiveHtmlCss] = useState<boolean>(false);
  const [isActiveMaterial, setIsActiveMaterial] = useState<boolean>(false);

  return (
    <>
      <div className="w-full bg-surfaceLight  dark:bg-surfaceDark text-white py-5">
        <div className="container flex flex-col gap-10">
          <div className="flex items-center justify-start gap-2 rounded-b-lg w-fit">
            {/* <span className="h-10 w-3 bg-white"></span> */}
            <h3 className="font-bold text-3xl text-headingTextLight dark:text-headingTextDark">
              {" "}
              مهارت های من :{" "}
            </h3>
          </div>
          <div className="w-full flex items-center justify-center gap-5 flex-wrap">
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveReact(true)}
              onMouseLeave={() => setIsActiveReact(false)}
              onClick={() => setIsActiveReact(!isActiveReact)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-bodyTextDark text-bodyTextLight font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveReact
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaReact className="text-7xl text-cyan-500" />
                React
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight  dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveReact
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  React JS
                </h3>

                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <span className="text-cyan-400 text-sm font-bold mt-2">
                  85%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Frontend
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveNext(true)}
              onMouseLeave={() => setIsActiveNext(false)}
              onClick={() => setIsActiveNext(!isActiveNext)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveNext
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <RiNextjsFill className="text-7xl text-gray-900 dark:text-white" />
                Next.JS
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveNext
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Next.Js
                </h3>

                <div className="w-full h-2 bg-gray-500 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 shadow-[0_0_10px_#22d3ee]"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <span className="dark:text-gray-400 text-black text-sm font-bold mt-2">
                  85%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Frontend
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveJs(true)}
              onMouseLeave={() => setIsActiveJs(false)}
              onClick={() => setIsActiveJs(!isActiveJs)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveJs
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <RiJavascriptFill className="text-7xl text-yellow-500" />
                JavaScript
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveJs
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  JavaScript
                </h3>

                <div className="w-full h-2 bg-yellow-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 "
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <span className="text-yellow-500 text-sm font-bold mt-2">
                  90%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Languages
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveRedux(true)}
              onMouseLeave={() => setIsActiveRedux(false)}
              onClick={() => setIsActiveRedux(!isActiveRedux)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveRedux
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <SiRedux className="text-7xl text-purple-600" />
                Redux
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveRedux
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Redux
                </h3>

                <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 "
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <span className="text-purple-600 text-sm font-bold mt-2">
                  85%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Frontend
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveTs(true)}
              onMouseLeave={() => setIsActiveTs(false)}
              onClick={() => setIsActiveTs(!isActiveTs)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveTs
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <SiTypescript className="text-7xl text-blue-600" />
                TypeScript
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveTs
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  TypeScript
                </h3>

                <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 "
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <span className="text-blue-600 text-sm font-bold mt-2">
                  75%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Languages
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveTailwind(true)}
              onMouseLeave={() => setIsActiveTailwind(false)}
              onClick={() => setIsActiveTailwind(!isActiveTailwind)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveTailwind
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <RiTailwindCssFill className="text-7xl text-blue-600" />
                Tailwind CSS
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveTailwind
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Tailwind CSS
                </h3>

                <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 "
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <span className="text-blue-600 text-sm font-bold mt-2">
                  90%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveGit(true)}
              onMouseLeave={() => setIsActiveGit(false)}
              onClick={() => setIsActiveGit(!isActiveGit)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveGit
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaGitAlt className="text-7xl text-red-600 " />
                Git | GitHub
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveGit
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Git | GitHub
                </h3>

                <div className="w-full h-2 bg-red-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 "
                    style={{ width: "95%" }}
                  ></div>
                </div>

                <span className="text-red-600 text-sm font-bold mt-2">95%</span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  Package Manager
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActivePwa(true)}
              onMouseLeave={() => setIsActivePwa(false)}
              onClick={() => setIsActivePwa(!isActivePwa)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActivePwa
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <SiPwa className="text-7xl text-green-600 " />
                PWA
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActivePwa
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  PWA
                </h3>

                <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600 "
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <span className="text-green-600 text-sm font-bold mt-2">
                  70%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  FrontEnd
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveTesting(true)}
              onMouseLeave={() => setIsActiveTesting(false)}
              onClick={() => setIsActiveTesting(!isActiveTesting)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveTesting
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <IoCodeSlashSharp className="text-7xl text-orange-600 " />
                Testing
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveTesting
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Testing
                </h3>

                <div className="w-full h-2 bg-orange-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-600 "
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <span className="text-orange-600 text-sm font-bold mt-2">
                  75%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  FrontEnd
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveBootstrap(true)}
              onMouseLeave={() => setIsActiveBootstrap(false)}
              onClick={() => setIsActiveBootstrap(!isActiveBootstrap)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveBootstrap
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaBootstrap className="text-7xl text-purple-600 " />
                Bootstrap
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveBootstrap
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Bootstrap
                </h3>

                <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 "
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <span className="text-purple-600 text-sm font-bold mt-2">
                  100%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveMaterial(true)}
              onMouseLeave={() => setIsActiveMaterial(false)}
              onClick={() => setIsActiveMaterial(!isActiveMaterial)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveMaterial
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaCode className="text-7xl text-black dark:text-white " />
                Material
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveMaterial
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Material
                </h3>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black  "
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <span className="dark:text-gray-400 text-black  text-sm font-bold mt-2">
                  100%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveSass(true)}
              onMouseLeave={() => setIsActiveSass(false)}
              onClick={() => setIsActiveSass(!isActiveSass)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveSass
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaSass className="text-7xl text-pink-600 " />
                Sass
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveSass
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Sass
                </h3>

                <div className="w-full h-2 bg-pink-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pink-600 "
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <span className="text-pink-600 text-sm font-bold mt-2">
                  100%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveShodCn(true)}
              onMouseLeave={() => setIsActiveShodCn(false)}
              onClick={() => setIsActiveShodCn(!isActiveShodCn)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveShodCn
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaCode className="text-7xl text-black dark:text-white " />
                ShodCn
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveShodCn
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  ShodCn
                </h3>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black  "
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <span className="dark:text-gray-400 text-black  text-sm font-bold mt-2">
                  100%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
            <div
              className="relative w-40 h-40 bg-bgLight dark:bg-bgDark rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsActiveHtmlCss(true)}
              onMouseLeave={() => setIsActiveHtmlCss(false)}
              onClick={() => setIsActiveHtmlCss(!isActiveHtmlCss)}
            >
              <div
                className={`absolute inset-0 flex-col dark:text-gray-400 text-gray-600 font-sans text-xl font-semibold  flex items-center justify-center transition-all duration-500 ease-in-out
          ${
            isActiveHtmlCss
              ? "opacity-0 invisible translate-y-10"
              : "opacity-100  visible translate-y-0"
          }
        `}
              >
                <FaHtml5 className="text-7xl text-orange-600" />
                Html | Css
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-bgLight dark:bg-bgDark p-4 transition-all duration-500 ease-in-out
          ${
            isActiveHtmlCss
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
              >
                <h3 className="dark:text-white text-gray-900 font-bold text-lg mb-2">
                  Html | Css
                </h3>

                <div className="w-full h-2 bg-orange-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-600  "
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <span className=" text-orange-600  text-sm font-bold mt-2">
                  100%
                </span>
                <span className="w-full bg-gray-300 dark:bg-gray-800 text-center rounded-lg dark:text-white text-gray-800">
                  UI Library
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-5 md:gap-10 flex-wrap">
            <div data-aos="fade-up" className="md:w-64 w-40 md:h-52 h-36 hover:scale-105 transition-all rounded-lg p-2 md:p-5 flex flex-col items-center justify-center gap-2 md:gap-5 bg-bgLight shadow-2xl dark:bg-bgDark border-2 dark:border-brd ">
              <IoStatsChart className="text-3xl md:text-4xl text-headingTextLight dark:text-headingTextDark"/>
              <h4 className="text-2xl md:text-4xl font-bold text-headingTextLight dark:text-headingTextDark"> 87% </h4>
              <p className="dark:text-bodyTextDark text-bodyTextLight font-extralight"> میانگین مهارت</p>
            </div>
            <div data-aos="fade-up" className="md:w-64 w-40 md:h-52 h-36 hover:scale-105 transition-all rounded-lg p-2 md:p-5 flex flex-col items-center justify-center gap-2 md:gap-5 bg-bgLight shadow-2xl dark:bg-bgDark border-2 dark:border-brd ">
              <IoCodeOutline className="text-4xl font-black text-headingTextLight dark:text-headingTextDark"/>
              <h4 className="text-2xl md:text-4xl font-bold text-headingTextLight dark:text-headingTextDark"> 2 </h4>
              <p className="dark:text-bodyTextDark text-bodyTextLight font-extralight"> زبان ها </p>
            </div>
            <div data-aos="fade-up" className="md:w-64 w-40 md:h-52 h-36 hover:scale-105 transition-all rounded-lg flex flex-col items-center justify-center gap-2 bg-bgLight shadow-2xl dark:bg-bgDark border-2 dark:border-brd ">
              <DiStylus className="md:text-6xl text-4xl text-headingTextLight dark:text-headingTextDark"/>
              <h4 className="md:text-4xl text-2xl font-bold text-headingTextLight dark:text-headingTextDark"> 5 </h4>
              <p className="dark:text-bodyTextDark text-bodyTextLight font-extralight"> کتابخانه رابط کاربری </p>
            </div>
            <div data-aos="fade-up" className="md:w-64 w-40 md:h-52 h-36 hover:scale-105 transition-all rounded-lg p-2 md:p-5 flex flex-col items-center justify-center gap-2 md:gap-5 bg-bgLight shadow-2xl dark:bg-bgDark border-2 dark:border-brd ">
              <IoStatsChart className="text-3xl md:text-4xl text-headingTextLight dark:text-headingTextDark"/>
              <h4 className="text-2xl md:text-4xl font-bold text-headingTextLight dark:text-headingTextDark"> 87% </h4>
              <p className="dark:text-bodyTextDark text-bodyTextLight font-extralight"> میانگین مهارت </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
