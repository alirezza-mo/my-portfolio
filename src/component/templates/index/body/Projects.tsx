"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

// ۱. دیتا را به یک ثابت منتقل می کنیم
const PROJECTS_DATA = [
  {
    title: "وبسایت 4K-club",
    description: "جهت ایجاد افزایش رقابت بین پلیر های گیم نت بوجود آمده است. این پروژه بصورت Full stack توسعه داده شده است.",
    image: "/images/4k-club.webp",
    tags: ["ShadCn", "MongoDB", "Pusher", "Next.JS"],
    github: "https://github.com/alirezza-mo/club-4k",
    demo: "https://club-4k.vercel.app/",
    featured: true,
  },
  {
    title: "ست کافی وبسایت",
    description: "فروشگاه ست کافی با پنل ادمین و پنل کاربری و امکان ثبت نام OTP. هندل کردن عضویت دوگانه یکی از چالش‌های اصلی بود.",
    image: "/images/set-coffee.png",
    tags: ["Bcryptjs", "Leaflet", "Rechart", "Next.js"],
    github: "https://github.com/alirezza-mo/set-coffee",
    featured: true,
  },
  // سایر پروژه‌ها را به همین ترتیب اینجا اضافه کن...
];

function Projects() {
  return (
    <section className="container mx-auto px-4 py-20 overflow-hidden">
      <div className="flex items-center justify-start mb-12">
        <h2 className="text-4xl font-black text-headingTextLight dark:text-headingTextDark relative">
          پروژه های من
          <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-headingTextDark rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-surfaceLight dark:bg-surfaceDark rounded-[2rem] border border-brd/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-yellow-400/20 backdrop-blur-md text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-[10px] font-bold border border-yellow-400/30">
                  FEATURED <CiStar className="text-sm" />
                </div>
              )}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surfaceDark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="flex gap-3">
                  <Link href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-headingTextDark transition-colors">
                    <FaGithub size={20} />
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accentDark transition-colors">
                      <GoLinkExternal size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h4 className="text-2xl font-bold text-headingTextLight dark:text-headingTextDark mb-4">
                {project.title}
              </h4>
              <p className="text-bodyTextLight/80 dark:text-bodyTextDark/80 text-sm leading-7 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-medium rounded-lg bg-headingTextLight/5 dark:bg-headingTextDark/10 text-purple-600 dark:text-purple-400 border border-purple-500/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-headingTextDark text-white rounded-2xl font-bold hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.5)] transition-all"
        >
          دیدن همه پروژه‌ها
        </Link>
      </div>
    </section>
  );
}

export default Projects;