"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi2";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    // اینجا در آینده منطق ارسال ایمیل (Nodemailer یا EmailJS) را اضافه می‌کنیم
    setTimeout(() => {
      setPending(false);
      alert("پیام شما با موفقیت (شبیه‌سازی) ارسال شد!");
    }, 2000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold mr-2 text-bodyTextDark/60">نام شما</label>
          <input
            required
            type="text"
            className="w-full bg-surfaceDark/50 border border-brd/10 rounded-2xl px-5 py-4 focus:border-headingTextDark outline-none transition-all text-sm"
            placeholder="مثلاً: علی محمدی"
          />
        </div>
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold mr-2 text-bodyTextDark/60">ایمیل</label>
          <input
            required
            type="email"
            className="w-full bg-surfaceDark/50 border border-brd/10 rounded-2xl px-5 py-4 focus:border-headingTextDark outline-none transition-all text-sm dir-ltr"
            placeholder="example@mail.com"
          />
        </div>
      </div>

      <div className="space-y-2 text-right">
        <label className="text-sm font-bold mr-2 text-bodyTextDark/60">موضوع پیام</label>
        <input
          required
          type="text"
          className="w-full bg-surfaceDark/50 border border-brd/10 rounded-2xl px-5 py-4 focus:border-headingTextDark outline-none transition-all text-sm"
          placeholder="همکاری، پروژه جدید یا..."
        />
      </div>

      <div className="space-y-2 text-right">
        <label className="text-sm font-bold mr-2 text-bodyTextDark/60">متن پیام</label>
        <textarea
          required
          rows={5}
          className="w-full bg-surfaceDark/50 border border-brd/10 rounded-2xl px-5 py-4 focus:border-headingTextDark outline-none transition-all text-sm resize-none"
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>

      <button
        disabled={pending}
        className="w-full py-4 bg-headingTextDark text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50"
      >
        {pending ? (
          "در حال ارسال..."
        ) : (
          <>
            <span>ارسال پیام</span>
            <HiPaperAirplane className="rotate-180" />
          </>
        )}
      </button>
    </motion.form>
  );
}