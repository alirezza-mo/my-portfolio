"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaSearch } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const categories = ["All", "Full Stack", "Frontend", "E-Commerce", "Tools"];

export default function ProjectList({ projects }: { projects: any[] }) {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.techStack.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sticky top-24 z-30 bg-bgLight/80 dark:bg-bgDark/80 backdrop-blur-xl p-4 rounded-2xl border border-brd/10 shadow-sm">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === cat ? "bg-headingTextDark text-white" : "bg-surfaceLight dark:bg-surfaceDark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-surfaceLight dark:bg-surfaceDark rounded-xl border border-brd/10 outline-none"
          />
        </div>
      </div>

      {/* Animated Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left" dir="ltr">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={project.id}
              className="bg-surfaceLight dark:bg-surfaceDark rounded-3xl overflow-hidden border border-brd/10 flex flex-col"
            >
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-headingTextLight dark:text-headingTextDark">{project.title}</h3>
                <p className="text-sm opacity-70 mb-4 h-12 line-clamp-2">{project.description}</p>
                <div className="flex gap-3">
                   <Link href={project.github} className="text-headingTextDark"><FaGithub size={20}/></Link>
                   {project.demo && <Link href={project.demo} className="text-accentDark"><GoLinkExternal size={20}/></Link>}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}