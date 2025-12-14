import React from "react";
import { FaArrowDown } from "react-icons/fa";

function AboutMe() {
  return (
    <>
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
    </>
  );
}

export default AboutMe;
