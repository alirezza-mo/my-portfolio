"use client";

import React from "react";
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiNpm,
  SiSass,
  SiTailwindcss,
  SiRedux,
  SiPwa,
  SiNextdotjs,
} from "react-icons/si";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

interface TimelineData {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineItemProps {
  data: TimelineData;
  index: number;
}

const timelineData: TimelineData[] = [
  {
    id: 1,
    title: "HTML",
    date: "اسفند 1402 - اسفند 1402",
    description:
      "یادگیری عمیق ساختار صفحات وب و استفاده از تگ‌های سمانتیک برای بهبود سئو و دسترسی‌پذیری. HTML5 پایه و اساس تمام پروژه‌های من در مسیر یادگیری فرانت‌اند بوده است.",
    icon: <SiHtml5 />,
  },
  {
    id: 2, // ترتیب زمانی را بر اساس یادگیری خودت تنظیم کن
    title: "CSS",
    date: "فروردین 1403 - اردیبهشت 1403",
    description:
      "تسلط بر متدهای چیدمان مدرن مثل Grid و Flexbox، پیاده‌سازی طرح‌های کاملاً واکنش‌گرا و کار با انیمیشن‌های CSS برای ارتقای تجربه کاربری (UX).",
    icon: <SiCss3 />,
  },
  {
    id: 3,
    title: "Git & GitHub",
    date: "اردیبهشت 1403 - خرداد 1403",
    description:
      "مدیریت نسخه‌های کد و همکاری تیمی با استفاده از Git. تسلط بر Branching و حل Conflictها برای مدیریت پروژه‌های Open Source.",
    icon: <SiGithub />,
  },
  {
    id: 4,
    title: "JavaScript (ES6+)",
    date: " تیر 1403 - آبان 1403",
    description:
      "درک عمیق هسته‌ی جاوااسکریپت، Closureها، Promises و Async/Await. تسلط بر منطق برنامه‌نویسی برای ایجاد تعاملات پیچیده.",
    icon: <SiJavascript />,
  },
  {
    id: 5,
    title: "NPM & Ecosystem",
    date: "آبان 1403 - آبان 1403",
    description:
      "مدیریت وابستگی‌های پروژه و کار با اکوسیستم عظیم بسته‌های جاوااسکریپت برای افزایش سرعت و کیفیت توسعه.",
    icon: <SiNpm />,
  },
  {
    id: 6,
    title: "JS Libraries",
    date: "آبان 1403 - آذر 1403",
    description:
      "کار با کتابخانه‌های کاربردی جاوااسکریپت جهت مدیریت داده‌ها، اعتبارسنجی فرم‌ها و بهینه‌سازی کدهای تکراری.",
    icon: <FaCode />,
  },
  {
    id: 7,
    title: "Canvas",
    date: "آذر 1403 - بهمن 1403",
    description:
      "ورود به دنیای Creative Coding؛ رندرینگ گرافیک‌های دو‌بعدی و ساخت انیمیشن‌های پیشرفته مستقیماً در مرورگر.",
    icon: <FaCode />,
  },
  {
    id: 8,
    title: "Sass (SCSS)",
    date: "بهمن 1403 - بهمن 1403",
    description:
      "معماری پیشرفته CSS؛ استفاده از Mixinها و متغیرها برای نوشتن استایل‌های ماژولار و قابل نگهداری در پروژه‌های بزرگ.",
    icon: <SiSass />,
  },
  {
    id: 9,
    title: "Tailwind CSS",
    date: "بهمن 1403 - اسفند 1403",
    description:
      "طراحی سریع و مدرن UI با رویکرد Utility-First. پیاده‌سازی دیزاین سیستم‌های دقیق و کاملاً ریسپانسیو در کمترین زمان.",
    icon: <SiTailwindcss />,
  },
  {
    id: 10,
    title: "React JS",
    date: "اسفند 1403 - خرداد 1404",
    description:
      "یادگیری کامپوننت‌محوری و هوک‌ها دید من را به فرانت‌اند تغییر داد. حالا می‌توانم رابط‌های کاربری پیچیده و تعاملی بسازم.",
    icon: <SiReact />,
  },
  {
    id: 11,
    title: "Redux",
    date: "خرداد 1404 - مرداد 1404",
    description:
      "مدیریت وضعیت (State) متمرکز در اپلیکیشن‌های مقیاس‌پذیر. ایجاد جریان داده قابل پیش‌بینی و دیباگینگ آسان.",
    icon: <SiRedux />,
  },

  {
    id: 12,
    title: "TS",
    date: "مرداد 1404 - آبان 1404",
    description:
      "تایپ‌اسکریپت سطح امنیت کد من را بالا برد. حالا با استفاده از تایپ‌های ایستا، باگ‌های کمتری دارم و کدهایم خواناتر شده‌اند. ادغام آن با فریم‌ورک‌های مدرن تجربه توسعه را لذت‌بخش کرده است.",
    icon: <SiTypescript />,
  },
  {
    id: 13,
    title: "Next.js",
    date: "آبان 1404 - دی 1404",
    description:
      "توسعه اپلیکیشن‌های Full-stack با React. تسلط بر SSR، SSG و قابلیت‌های مدرن App Router برای سئو و پرفورمنس عالی.",
    icon: <SiNextdotjs />,
  },
  {
    id: 14,
    title: "PWA",
    date: "هم اکنون",
    description:
      "پل میان وب و موبایل؛ تبدیل وب‌سایت به اپلیکیشن قابل نصب با قابلیت کارکرد آفلاین و Push Notifications.",
    icon: <SiPwa />,
  },
];

const TimeLineSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-bgLight dark:bg-bgDark py-20 px-4 md:px-10 overflow-hidden relative transition-colors duration-300">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-black  bg-clip-text text-headingTextLight dark:text-headingTextDark  mb-4 drop-shadow-lg">
          مسیر یادگیری من
        </h2>
        <p className="text-bodyTextLight dark:text-bodyTextDark opacity-70">
          داستان رشد مهارت‌های من در دنیای کدنویسی
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute right-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-headingTextLight via-accentLight to-transparent dark:from-headingTextDark dark:via-accentDark dark:to-transparent rounded-full opacity-30 dark:opacity-50" />

        <div className="flex flex-col gap-12">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-1/2" />
      <div className="absolute right-0 md:left-1/2  flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-bgLight dark:bg-bgDark border-2 border-accentLight dark:border-accentDark z-10 shadow-lg dark:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300">
        <span className="text-xl md:text-3xl text-accentLight dark:text-accentDark">
          {data.icon}
        </span>
      </div>
      <div className="w-full md:w-1/2 pr-12 pl-4 md:px-10 text-right">
        <div className="relative p-6 rounded-2xl border border-elementLight/20 dark:border-brd/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.3)] overflow-hidden bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-elementLight/10 to-transparent dark:from-headingTextDark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-4 gap-3">
            <h3 className="text-2xl font-bold text-bodyTextLight dark:text-bodyTextDark group-hover:text-headingTextLight dark:group-hover:text-headingTextDark transition-colors">
              {data.title}
            </h3>

            <span className="px-3 py-1 text-xs font-bold rounded-full bg-elementLight/10 dark:bg-headingTextDark/20 text-elementLight dark:text-accentDark border border-elementLight/30 dark:border-headingTextDark/30 shadow-sm dark:shadow-[0_0_10px_rgba(139,92,246,0.2)]">
              {data.date}
            </span>
          </div>
          <p className="text-bodyTextLight/80 dark:text-bodyTextDark/80 leading-7 text-sm md:text-base text-justify">
            {data.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLineSection;
