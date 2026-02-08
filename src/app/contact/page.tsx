import React from "react";
import ContactForm from "@/component/templates/Contact/ContactForm";
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import Navbar from "@/component/modules/Navber/Navbar";

export const metadata = {
  title: "ارتباط با من | علیرضا مرادی",
  description: "برای همکاری در پروژه‌ها یا مشاوره، از طریق فرم زیر با من در تماس باشید.",
};

const SOCIAL_LINKS = [
  { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/alirezza-mo", color: "hover:text-blue-500" },
  { icon: <FaGithub size={24} />, link: "https://github.com/alirezza-mo", color: "hover:text-white" },
  { icon: <FaTelegram size={24} />, link: "https://t.me/allirezza_mr", color: "hover:text-sky-500" },
  { icon: <FaInstagram size={24} />, link: "https://www.instagram.com/alirezza.mo", color: "hover:text-pink-500" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 container mx-auto">
      <Navbar/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-28">
        
        <div className="space-y-10 text-right">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-headingTextLight dark:text-headingTextDark">
              بیا با هم <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">گپ بزنیم</span>
            </h1>
            <p className="text-bodyTextLight dark:text-bodyTextDark/70 max-w-md leading-relaxed">
              اگر سوالی داری، پیشنهادی برای همکاری داری یا فقط می‌خواهی سلامی بدهی، من همیشه آماده شنیدن هستم.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-headingTextDark transition-colors">
                <HiEnvelope className="text-2xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">ایمیل من</p>
                <p className="font-bold">alirezza.dev2@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-headingTextDark transition-colors">
                <HiMapPin className="text-2xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">موقعیت</p>
                <p className="font-bold"> شهرکرد ، ایران </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            {SOCIAL_LINKS.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className={`p-3 bg-white/5 rounded-xl border border-white/10 transition-all ${item.color} hover:-translate-y-2`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}