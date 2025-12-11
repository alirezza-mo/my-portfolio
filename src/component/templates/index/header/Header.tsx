import Navbar from "@/component/modules/Navber/Navbar";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="w-full h-screen bg-[url(/images/herosection-mobile.png)] md:bg-[url(/images/herosection.jpg)] bg-center bg-cover">
      <Navbar/>
        <div className="flex items-center justify-between p-2 w-full h-full inset-0">
          <div className="h-full w-[50%] flex items-start  pt-64 lg:pt-0 lg:items-center justify-center">
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
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
