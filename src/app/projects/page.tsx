"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../../utils/data"; // مسیر دیتا را چک کن
import { FaGithub, FaSearch } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { HiCodeBracketSquare } from "react-icons/hi2";

const categories = ["All", "Full Stack", "Frontend", "E-Commerce", "Tools"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // منطق فیلتر ترکیبی (دسته‌بندی + جستجو)
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 container mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-headingTextDark/10 rounded-full text-headingTextDark mb-2"
        >
          <HiCodeBracketSquare size={32} />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-headingTextLight dark:text-headingTextDark">
          آرشیو <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">پروژه‌ها</span>
        </h1>
        <p className="text-bodyTextLight dark:text-bodyTextDark max-w-lg mx-auto">
          مجموعه‌ای از کدهای من، از پروژه‌های تمرینی کوچک تا اپلیکیشن‌های کامل بیزینسی.
        </p>
      </div>

      {/* Controls: Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-24 z-30 bg-bgLight/80 dark:bg-bgDark/80 backdrop-blur-xl p-4 rounded-2xl border border-brd/10 shadow-sm">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === cat
                  ? "bg-headingTextDark text-white shadow-lg shadow-purple-500/25"
                  : "bg-surfaceLight dark:bg-surfaceDark text-bodyTextLight dark:text-bodyTextDark hover:bg-headingTextDark/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="جستجو در پروژه‌ها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-brd/10 focus:border-headingTextDark focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group bg-surfaceLight dark:bg-surfaceDark rounded-3xl overflow-hidden border border-brd/10 shadow-lg hover:shadow-2xl hover:border-headingTextDark/30 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    title="مشاهده سورس کد"
                  >
                    <FaGithub size={20} />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="p-3 bg-headingTextDark text-white rounded-full hover:scale-110 transition-transform"
                      title="مشاهده دمو"
                    >
                      <GoLinkExternal size={20} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-accentDark bg-accentDark/10 px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-headingTextLight dark:text-headingTextDark mb-2">
                  {project.title}
                </h3>
                
                <p className="text-bodyTextLight/70 dark:text-bodyTextDark/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-brd/5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 opacity-50">
          <p>هیچ پروژه‌ای با این مشخصات پیدا نشد :(</p>
        </div>
      )}
    </div>
  );
}