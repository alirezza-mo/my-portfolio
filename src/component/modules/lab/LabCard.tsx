"use client";
import React from "react";
import { motion } from "framer-motion";
import { Experiment } from "./labData";
import ParticleScene from "./Experiments/ParticleScene";
import Link from "next/link";

const LabCard: React.FC<{ item: Experiment }> = ({ item }) => {
  return (
    <Link href={item.path}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative p-6 rounded-3xl border border-brd/30 bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-xl overflow-hidden transition-all duration-300"
      >
        <div className="absolute -inset-px bg-gradient-to-br from-headingTextDark/20 to-accentDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden bg-bgDark">
              {item.id === 1 ? (
                <ParticleScene />
              ) : (
                <div className="flex items-center justify-center h-full text-4xl opacity-20">
                  {item.icon}
                </div>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-widest text-headingTextLight dark:text-headingTextDark font-bold bg-headingTextLight/10 px-2 py-1 rounded-md">
              {item.status}
            </span>
          </div>

          <h3 className="text-xl font-bold text-bodyTextLight dark:text-bodyTextDark mb-2 group-hover:text-headingTextLight dark:group-hover:text-headingTextDark transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-bodyTextLight/70 dark:text-bodyTextDark/70 leading-6 mb-4 line-clamp-2">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-accentLight dark:text-accentDark opacity-80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default LabCard;
