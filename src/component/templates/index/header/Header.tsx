"use client"
import Navbar from "@/component/modules/Navber/Navbar";
import FuzzyText from "@/component/ui/shadcn-io/fuzzy-text";
import TypingText from "@/component/ui/shadcn-io/typing-text";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  const [width , setWidth] = useState<number>(0)
   useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth()
    window.addEventListener("resize", updateWidth);
    
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <>
      <header className="w-full h-screen bg-[url(/images/herosection-mobile.png)] md:bg-[url(/images/herosection.jpg)] bg-center bg-cover">
        <Navbar />
        <div className="flex flex-col items-start justify-around md:justify-center w-full h-full inset-0">
          <div className="flex flex-col items-center justify-around md:justify-center w-full md:h-[70%]">
            <div className="flex flex-col items-start justify-center gap-5">
              {/* <p className="text-white"> سلام، من </p> */}
              <div className="flex items-center justify-center gap-1">
                <h3 className="text-white font-black text-6xl xl:text-[230px]">
                  <TypingText
                    text={["علیرضا مرادی", "Alireza Moradi"]}
                    typingSpeed={75}
                    pauseDuration={3000}
                    showCursor={true}
                    cursorCharacter="|"
                    className={`${width > 1280 ? `text-[220px]` :`text-7xl`} font-black`}
                    textColors={["#f5f5f5"]}
                    variableSpeed={{ min: 20, max: 200 }}
                    loop={true}
                  />
                </h3>
                {/* <h3 className="text-white font-black text-3xl xl:text-5xl">
                  {" "}
                  ام{" "}
                </h3> */}
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center w-full gap-10 md:px-10">
            <div className="flex flex-col items-center md:items-start md:justify-start gap-7 w-full">
              <h4 className="text-3xl  xl:text-4xl text-white font-bold">
                <FuzzyText
                  fontSize="36px"
                  fontWeight={700}
                  color="#ffffff"
                  enableHover={true}
                  baseIntensity={0.18}
                  hoverIntensity={0.5}
                >
                //  Frontend Developer
                </FuzzyText>
              </h4>
              <h5 className="text-white text-2xl font-extralight">
                {" "}
                <FuzzyText
                  fontSize="36px"
                  fontWeight={100}
                  color="#ffffff"
                  enableHover={true}
                  baseIntensity={0.18}
                  hoverIntensity={0.5}
                >
                // TypeScript | Next.JS
                </FuzzyText>
                
              </h5>
              {/* <p className="font-extralight text-white">
                همیشه در مسیر خلق تجربه‌های سریع و قابل‌اعتماد.
              </p> */}
            </div>
            <div className="flex items-center justify-center md:flex-col gap-1">
              <Link
                href={"https://t.me/allirezza_mr"}
                className="group w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-transparent transition-all"
              >
                <FaTelegram className="group-hover:text-blue-600 group-hover:scale-150 text-white text-2xl lg:text-4xl transition-all " />
              </Link>
              <Link
                href={"https://t.me/allirezza_mr"}
                className="group w-14 h-14  rounded-lg bg-white flex items-center justify-center hover:bg-transparent transition-all"
              >
                <FaLinkedin className="group-hover:text-blue-600 group-hover:scale-150 text-blue-600 text-2xl lg:text-4xl transition-all" />
              </Link>
              <Link
                href={"https://t.me/allirezza_mr"}
                className="group w-14 h-14  rounded-lg bg-black flex items-center justify-center hover:bg-transparent transition-all"
              >
                <FaGithub className="group-hover:text-white group-hover:scale-150 text-white text-2xl lg:text-4xl transition-all " />
              </Link>
              <Link
                href={"https://t.me/allirezza_mr"}
                className="group w-14 h-14 rounded-lg bg-red-600 flex items-center justify-center hover:bg-transparent transition-all"
              >
                <FaInstagramSquare className="group-hover:text-red-500 group-hover:scale-150 text-white text-2xl lg:text-4xl rounded-lg transition-all  " />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="h-full w-[50%] flex items-start  pt-64 lg:pt-0 lg:items-center justify-center">
            <div className="flex flex-col gap-5">
              <div className=" flex items-end justify-center">
                <div className="flex flex-col items-start justify-center gap-7">
                  <h3 className=" text-lg text-white">
                    {" "}
                    سلام، خوش آمدید من{" "}
                  </h3>
                  <div className="flex items-start justify-start flex-col gap-3">
                    <h3 className="text-center text-orange-600 text-2xl md:text-5xl xl:text-7xl font-black ">
                      {" "}
                    علیرضا مرادی،
                    {" "}
                    </h3>
                    <h3 className="text-center text-white text-xl md:text-3xl xl:text-5xl font-bold ">
                      توسعه دهنده فرانت اند هستم.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[40%] flex flex-col items-center justify-end gap-3 lg:gap-16">
            <div className="flex flex-col gap-2 lg:gap-5">
              <h4 className="text-white font-bold text-base md:text-lg lg:text-xl xl:text-3xl leading-6 md:leading-10">
                همیشه در مسیر خلق تجربه‌های سریع و قابل‌اعتماد.
              </h4>
              <p className=" font-extralight lg:text-base lg:text-white text-orange-200 text-xs">
                در دنیای وب‌اپلیکیشن‌ها، من توسعه‌دهنده‌ای هستم که از ساخت هسته‌ی منطقی و قدرتمند پروژه‌ها لذت می‌برم؛ جایی که داده و عملکرد، معنای واقعی می‌گیرند.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 w-32 lg:w-64">
              <Link href={"https://t.me/allirezza_mr"} className="group w-14 h-14 xl:w-28 xl:h-28 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-transparent transition-all">
                <FaTelegram className="group-hover:text-blue-600 group-hover:scale-150 text-white text-2xl xl:text-4xl transition-all " />
              </Link>
              <Link href={"https://t.me/allirezza_mr"} className="group w-14 h-14 xl:w-28 xl:h-28 rounded-lg bg-white flex items-center justify-center hover:bg-transparent transition-all">
                <FaLinkedin className="group-hover:text-blue-600 group-hover:scale-150 text-blue-600 text-2xl xl:text-4xl transition-all" />
              </Link>
              <Link href={"https://t.me/allirezza_mr"} className="group w-14 h-14 xl:w-28 xl:h-28 rounded-lg bg-black flex items-center justify-center hover:bg-transparent transition-all">
                <FaGithub className="group-hover:text-white group-hover:scale-150 text-white text-2xl xl:text-4xl transition-all " />
              </Link>
              <Link href={"https://t.me/allirezza_mr"} className="group w-14 h-14 xl:w-28 xl:h-28 rounded-lg bg-red-600 flex items-center justify-center hover:bg-transparent transition-all">
                <FaInstagramSquare className="group-hover:text-red-500 group-hover:scale-150 text-white text-2xl xl:text-4xl rounded-lg transition-all  " />
              </Link>
            </div>
          </div> */}
      </header>
    </>
  );
}

export default Header;
