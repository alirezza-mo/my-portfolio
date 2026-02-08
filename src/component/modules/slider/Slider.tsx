"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  HiHome, 
  HiUser, 
  HiCodeBracketSquare, 
  HiDocumentText, 
  HiEnvelope, 
  HiMoon, 
  HiSun 
} from "react-icons/hi2";

const NAV_ITEMS = [
  { name: "خانه", path: "/", icon: <HiHome /> },
  { name: "پروژه‌ها", path: "/projects", icon: <HiCodeBracketSquare /> },
  { name: "رزومه", path: "/resume", icon: <HiDocumentText /> },
  { name: "تماس", path: "/contact", icon: <HiEnvelope /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [ theme, setTheme ] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    const prefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(false);
    }
  }, []);

    const toggleTheme = (): void => {
    const newTheme: boolean = !theme;
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTheme(newTheme);
  };

  return (
    <>
      <aside className="hidden md:flex fixed right-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-xl border-r border-brd/10 z-50 transition-colors">
        
        <Link href="/" className="w-10 h-10 bg-headingTextDark text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg hover:scale-110 transition-transform">
          AM
        </Link>

        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative group p-3 rounded-xl transition-all duration-300"
              >
                {isActive && (
                  <motion.span
                    layoutId="desktop-nav"
                    className="absolute inset-0 bg-headingTextDark/10 dark:bg-white/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <span className={`text-2xl ${isActive ? "text-headingTextDark dark:text-white" : "text-gray-400 group-hover:text-headingTextDark dark:group-hover:text-white"}`}>
                  {item.icon}
                </span>
                <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-headingTextDark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => toggleTheme()}
          className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-headingTextDark dark:hover:text-white transition-colors"
        >
          { theme  ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
        </button>
      </aside>
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-surfaceLight/90 dark:bg-surfaceDark/90 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-full px-6 py-3 z-50 flex items-center justify-between">
        
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative p-2"
            >
              {isActive && (
                 <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-headingTextDark dark:bg-white rounded-full"></span>
              )}
              <span className={`text-2xl transition-colors ${isActive ? "text-headingTextDark dark:text-white" : "text-gray-400"}`}>
                {item.icon}
              </span>
            </Link>
          );
        })}
        <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

        <button
          onClick={() => toggleTheme()}
          className="p-2 text-gray-500 active:scale-90 transition-transform"
        >
          {theme  ? <HiSun className="text-xl text-yellow-400" /> : <HiMoon className="text-xl text-slate-700" />}
        </button>
      </nav>
    </>
  );
}