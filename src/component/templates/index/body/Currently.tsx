import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { MdAddHomeWork, MdControlPoint, MdCoPresent } from "react-icons/md";

// 1. Data definition outside component to prevent re-creation
const features = [
  { id: 1, title: "نمودار نمرات ماهانه", icon: <GiChart size={28} /> }, // Icon size added
  { id: 2, title: "خروجی کارنامه", icon: <FaRegFilePdf size={24} /> },
  { id: 3, title: "حضور و غیاب", icon: <MdCoPresent size={28} /> },
  { id: 4, title: "ثبت و مدیریت نمره", icon: <MdControlPoint size={28} /> },
  { id: 5, title: "امکان ثبت تکالیف", icon: <MdAddHomeWork size={28} /> },
];

function Currently() {
  return (
    <section className="w-full mt-20 px-4">
      <div className="rounded-2xl bg-surfaceLight dark:bg-surfaceDark p-8 w-full shadow-sm border border-gray-100 dark:border-zinc-800">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-headingTextLight dark:text-headingTextDark mb-3 drop-shadow-sm">
            در حال حاضر
          </h3>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium">
            توسعه پنل هوشمند دانش‌آموزان
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center p-6 gap-4 rounded-xl 
                         bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-violet-500/30 cursor-pointer"
            >
              {/* Icon Container with subtle background */}
              <div className="p-3 rounded-full bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              
              <span className="text-sm md:text-base font-bold text-gray-700 dark:text-gray-200 text-center group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Currently;