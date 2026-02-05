"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiBeaker } from "react-icons/hi2";

const LabTeaser = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-headingTextDark/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border border-brd/20 bg-surfaceLight/30 dark:bg-surfaceDark/30 backdrop-blur-md p-8 md:p-16 rounded-[40px]">
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end gap-3 mb-6">
              <span className="px-4 py-1 rounded-full bg-accentDark/10 text-accentDark text-xs font-bold border border-accentDark/20 tracking-widest uppercase">
                Experimental
              </span>
              <HiBeaker className="text-3xl text-headingTextDark" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-bodyTextLight dark:text-bodyTextDark mb-6 leading-tight">
              وارد{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-headingTextDark to-accentDark">
                آزمایشگاه
              </span>{" "}
              کد شوید
            </h2>

            <p className="text-bodyTextLight/70 dark:text-bodyTextDark/70 text-lg mb-8 leading-relaxed max-w-xl mr-0 ml-auto">
              جایی که من با تکنولوژی‌های مدرن مثل Three.js، Canvas و فیزیک در وب
              بازی می‌کنم. این پروژه‌ها فراتر از کدهای معمولی هستند و مرزهای
              فرانت‌ند را جابه‌جا می‌کنند.
            </p>

            <Link href="/lab">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-headingTextDark text-white rounded-2xl font-bold shadow-[0_10px_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-headingTextDark/40 transition-all"
              >
                مشاهده آزمایش‌ها
              </motion.button>
            </Link>
          </div>

          <div className="flex-1 w-full max-w-sm aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-headingTextDark to-accentDark rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="w-full h-full border border-white/10 rounded-3xl bg-bgLight dark:bg-bgDark/80 flex items-center justify-center relative overflow-hidden">
              <div className="text-center p-10">
                <div className="text-5-xl mb-4 animate-pulse">🧪</div>
                <div className="flex gap-2 justify-center">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabTeaser;
