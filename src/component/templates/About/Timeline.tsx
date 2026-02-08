"use client";
import React from "react";
import { motion } from "framer-motion";

const STAGES = [
  {
    year: "۱۴۰۲",
    title: "شروع ماجرا",
    desc: "آشنایی با دنیای وب و یادگیری عمیق HTML و CSS. اولین قدم‌ها در دنیای کدنویسی.",
    side: "right",
  },
  {
    year: "۱۴۰۲",
    title: "ورود به دنیای جاوااسکریپت",
    desc: "یادگیری منطق برنامه‌نویسی و شروع کار با ES6+. ساخت اولین پروژه‌های تعاملی.",
    side: "left",
  },
  {
    year: "۱۴۰۳",
    title: "تسلط بر React و Next.js",
    desc: "ورود به دنیای فریم‌ورک‌های مدرن. یادگیری مدیریت استیت و ساخت اپلیکیشن‌های تک‌صفحه‌ای.",
    side: "right",
  },
  {
    year: "۱۴۰۴",
    title: "توسعه حرفه‌ای و آزمایشگاه کد",
    desc: "تمرکز بر بهینه‌سازی، انیمیشن‌های پیچیده و راه‌اندازی Code Lab شخصی.",
    side: "left",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* خط میانی تایم‌لاین */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500/0 hidden md:block"></div>

      <div className="space-y-12">
        {STAGES.map((stage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center justify-between w-full ${
              stage.side === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* محتوا */}
            <div className="w-full md:w-[45%] bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
              <span className="text-purple-500 font-black text-xl mb-2 block">{stage.year}</span>
              <h3 className="text-xl font-bold mb-3 text-headingTextDark">{stage.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                {stage.desc}
              </p>
            </div>

            {/* نقطه اتصال */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-surfaceDark z-10 hidden md:block"></div>

            {/* فضای خالی برای سمت مقابل */}
            <div className="hidden md:block w-[45%]"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}