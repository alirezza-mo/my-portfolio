import React from "react";
import { FaArrowDown } from "react-icons/fa";

function AboutMe() {
  return (
    <>
     <div className="flex flex-col items-center justify-between w-full gap-5">
       <div
        data-aos="fade-up"
        className="w-full rounded-xl dark:bg-surfaceDark shadow-2xl bg-bgLight p-5 flex flex-col items-start justify-between gap-10 my-16"
      >
        <h3 className="text-3xl font-bold text-headingTextLight dark:text-headingTextDark "> درباره من : </h3>
        <p className="text-wrap leading-7 md:leading-10 md:text-base text-sm text-bodyTextLight dark:text-bodyTextDark  ">
          من علیرضا مرادی هستم، توسعه‌دهنده فرانت‌اند با تمرکز بر Next.js و ساخت
          وب‌اپلیکیشن‌های واقعی. علاقه‌ام فقط به نوشتن کد نیست؛ به ساخت محصولاتی
          علاقه دارم که واقعاً استفاده می‌شوند. در پروژه‌هایم روی پیاده‌سازی
          احراز هویت، پنل‌های کاربری و ادمین، رابط‌های کاربری تمیز، و قابلیت‌های
          همزمان و زنده کار کرده‌ام. تجربه کار با پروژه‌های فول‌استک باعث شده
          دید جامعی نسبت به فرانت‌اند، ارتباط با بک‌اند و معماری کاربردی داشته
          باشم. به جزئیات، ساختار تمیز و تجربه کاربری اهمیت می‌دهم و همیشه تلاش
          می‌کنم خروجی نهایی چیزی باشد که بتوان به آن اعتماد کرد. اگر به دنبال
          همکاری با توسعه‌دهنده‌ای هستید که مسئولیت‌پذیر باشد و پروژه را فقط
          «تحویل» ندهد بلکه «درست» بسازد، خوشحال می‌شوم در ارتباط باشیم.
        </p>
        <div className="w-full flex justify-center">
          <button className="group p-3 rounded-full dark:bg-accentDark dark:hover:shadow-sky-300 shadow-md bg-gray-800 hover:bg-accentLight transition-all  text-center cursor-pointer animate-bounce">
            <FaArrowDown className="group-hover:text-gray-900 text-2xl text-accentLight dark:text-black transition-colors" />
          </button>
        </div>
      </div>
        <div className="flex items-center justify-center flex-wrap gap-5">
          <div data-aos="fade-down" className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-green-600 dark:bg-surfaceDark dark:border-[0.5px] border-gray-800   ">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-headingTextDark">2</p>
            <p className="text-white font-extralight text-xl dark:text-bodyTextDark">سال تجربه</p>
          </div>
          <div  className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-blue-600 dark:bg-surfaceDark dark:border-[0.5px] border-gray-800   " data-aos="fade-down">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-headingTextDark">15+</p>
            <p className="text-white font-extralight text-xl dark:text-bodyTextDark"> پروژه تکمیلی </p>
          </div>
          <div data-aos="fade-down" className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-red-600 dark:bg-surfaceDark dark:border-[0.5px] border-gray-800   ">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-headingTextDark">10+</p>
            <p className="text-white font-extralight text-xl dark:text-bodyTextDark"> تکنولوژی  </p>
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-wrap items-center justify-center gap-3">
          <div className="text-center bg-surfaceLight dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            Frontend Development
          </div>
          <div className="text-center bg-white dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            UI/UX Design
          </div>
          <div className="text-center bg-white dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            Problem Solving
          </div>
          <div className="text-center bg-white dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            Performance Optimization
          </div>
          <div className="text-center bg-white dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            Accessibility
          </div>
          <div className="text-center bg-white dark:bg-accentDark rounded-xl text-bodyTextLight dark:text-gray-950 dark:border-[0.5px] border-gray-800 p-1.5 shadow-md shadow-gray-400 dark:shadow-none ">
            Responsive Design
          </div>
        </div>
     </div>
    </>
  );
}

export default AboutMe;
