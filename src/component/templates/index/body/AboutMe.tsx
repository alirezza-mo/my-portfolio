import React from "react";
import { FaArrowDown } from "react-icons/fa";

function AboutMe() {
  return (
    <>
     <div className="flex flex-col items-center justify-between w-full gap-5">
       <div
        data-aos="fade-up"
        className="w-full rounded-xl dark:bg-gray-800 shadow-2xl bg-orange-600 p-5 flex flex-col items-start justify-between gap-10 my-16"
      >
        <h3 className="text-3xl font-bold text-gray-300 dark:text-orange-500 "> درباره من : </h3>
        <p className="text-wrap leading-7 md:leading-10 md:text-base text-sm text-white dark:text-gray-300">
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
          <button className="p-2 rounded-full bg-white text-center cursor-pointer animate-bounce">
            <FaArrowDown className="text-2xl text-orange-600" />
          </button>
        </div>
      </div>
        <div className="flex items-center justify-center flex-wrap gap-5">
          <div data-aos="fade-down" className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-green-600 dark:bg-gray-900 dark:border-[0.5px] border-gray-800   ">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-orange-600">2</p>
            <p className="text-white font-extralight text-xl dark:text-gray-400">سال تجربه</p>
          </div>
          <div  className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-blue-600 dark:bg-gray-900 dark:border-[0.5px] border-gray-800   " data-aos="fade-down">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-orange-600">15+</p>
            <p className="text-white font-extralight text-xl dark:text-gray-400"> پروژه تکمیلی </p>
          </div>
          <div data-aos="fade-down" className="flex flex-col items-center justify-between gap-3 p-10 rounded-lg shadow-lg bg-red-600 dark:bg-gray-900 dark:border-[0.5px] border-gray-800   ">
            <p className="md:text-5xl text-4xl text-gray-300 font-black font-sans dark:text-orange-600">10+</p>
            <p className="text-white font-extralight text-xl dark:text-gray-400"> تکنولوژی  </p>
          </div>
        </div>
        <div data-aos="fade-left" className="flex flex-wrap items-center justify-center gap-3">
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            Frontend Development
          </div>
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            UI/UX Design
          </div>
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            Problem Solving
          </div>
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            Performance Optimization
          </div>
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            Accessibility
          </div>
          <div className="text-center bg-white dark:bg-gray-950 rounded-xl text-gray-600 dark:text-gray-300 dark:border-[0.5px] border-gray-800 p-1.5 shadow-2xl t">
            Responsive Design
          </div>
        </div>
     </div>
    </>
  );
}

export default AboutMe;
