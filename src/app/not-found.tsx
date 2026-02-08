"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome, HiArrowRight } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-bgLight dark:bg-bgDark overflow-hidden relative">
      
      {/* بک‌گراند تزئینی: کدهای محو شده */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none font-mono text-xs leading-relaxed select-none overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i}>
            01010110 10010111 error_404_not_found function_debug(null) undefined_route segment_fault_at_0x404...
          </p>
        ))}
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] md:text-[15rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-purple-500/50 to-blue-500/10 select-none"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-surfaceLight dark:bg-surfaceDark border border-brd/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex gap-2 mb-6 justify-end">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>

          <div className="space-y-4 text-right font-mono">
            <p className="text-purple-500 font-bold">
              <span className="text-gray-400">$</span> status --check-route
            </p>
            <p className="text-red-500">
              [ERROR] مسیر مورد نظر در دیتابیسِ مغزِ من پیدا نشد!
            </p>
            <p className="text-bodyTextLight dark:text-bodyTextDark/70 text-sm">
              ظاهراً این صفحه به دنیای موازی منتقل شده یا اصلاً از اول وجود نداشته. نگران نباش، بیا برگردیم به جای امن.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-headingTextDark text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-purple-500/20 transition-all active:scale-95"
            >
              <HiHome size={20} />
              <span>بازگشت به خانه</span>
            </Link>
            
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-surfaceLight dark:bg-white/5 border border-brd/10 rounded-2xl font-bold hover:bg-headingTextDark/5 transition-all group"
            >
              <span>مشاهده پروژه‌ها</span>
              <HiArrowRight className="group-hover:translate-x-[-4px] transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* دکمه "گزارش باگ" (اختیاری) */}
        <p className="mt-8 text-xs text-gray-500 font-mono">
          اگر فکر می‌کنی این یک اشتباه سیستمی است، به من اطلاع بده.
        </p>
      </div>
    </div>
  );
}