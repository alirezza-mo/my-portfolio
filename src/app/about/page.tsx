import React from "react";
import Image from "next/image";
import { HiAcademicCap, HiCommandLine, HiSparkles } from "react-icons/hi2";
import Timeline from "@/component/templates/About/Timeline";
import Navbar from "@/component/modules/Navber/Navbar";

export const metadata = {
  title: "درباره من | علیرضا مرادی",
  description: "داستان مسیر برنامه‌نویسی و یادگیری من",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 container mx-auto overflow-hidden">
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-right">
          <h2 className="text-sm font-bold text-purple-500 tracking-widest uppercase flex items-center gap-2 justify-end">
            کمی درباره من <HiSparkles />
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-headingTextLight dark:text-headingTextDark leading-tight">
            من{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-blue-500">
              علیرضا
            </span>{" "}
            هستم، <br />
            یک کدنویس عاشق چالش.
          </h1>
          <p className="text-lg text-bodyTextLight dark:text-bodyTextDark/70 leading-relaxed max-w-2xl">
            مسیر من از علاقه به دنیای بازی‌ها شروع شد و به خلق دنیای کدها ختم
            شد. تمرکز اصلی من روی ساخت رابط‌های کاربری مدرن، بهینه و با تجربه
            کاربری فوق‌العاده است. من معتقدم هر خط کد باید داستانی برای گفتن
            داشته باشد.
          </p>

          <div className="flex gap-4 justify-end pt-4">
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 min-w-[100px]">
              <HiCommandLine className="text-3xl text-blue-500 mb-2" />
              <span className="text-xs font-bold">توسعه‌دهنده</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 min-w-[100px]">
              <HiAcademicCap className="text-3xl text-purple-500 mb-2" />
              <span className="text-xs font-bold">خودآموز</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-surfaceDark rounded-[3rem] overflow-hidden border border-white/10">
              <Image
                src="/images/hs-mb-purple.webp"
                alt="Profile"
                width={320}
                height={320}
                className="w-full h-full"
              />
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-5xl font-black italic">
                AM
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black">
            نقشه راه <span className="text-purple-500">یادگیری</span>
          </h2>
          <p className="text-gray-500">چگونه به اینجا رسیدم؟</p>
        </div>

        <Timeline />
      </section>
    </main>
  );
}
