"use client";
import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../../../utils/data";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function CreativeResume() {
  return (
    <div className="max-w-5xl mx-auto text-headingTextLight dark:text-headingTextDark">
      <div className="flex justify-end mb-6 print:hidden">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-purple-500/40 transition-all font-bold text-sm"
        >
          <HiDownload className="text-xl" /> دانلود نسخه چاپی (PDF)
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-surfaceLight dark:bg-surfaceDark backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden print:shadow-none print:border-none print:rounded-none"
      >
        <div className="relative h-48 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 print:bg-white print:h-auto print:pb-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 print:hidden"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 print:hidden"></div>

          <div className="absolute -bottom-16 right-8 md:right-16 flex items-end print:static print:flex-row print:items-center print:px-8 print:pt-8">
            <div className="w-32 h-32 rounded-3xl bg-black border-4 border-surfaceLight dark:border-surfaceDark overflow-hidden shadow-2xl print:border-black print:w-24 print:h-24">
              <Image
                src="/images/herosection.png"
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-4xl font-black">
                AM
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8 pb-12 md:px-16 print:pt-4 print:px-8">
          <div className="mb-12 print:mb-6">
            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
              {resumeData.header.name}
            </h1>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-bold mb-6">
              {resumeData.header.role}
            </p>
            <p className="text-bodyTextLight/80 dark:text-bodyTextDark/80 leading-relaxed max-w-2xl text-justify">
              {resumeData.header.bio}
            </p>

            <div className="md:flex flex-col  gap-4 mt-6 print:text-sm print:text-black">
              <Link
                href={`https://${resumeData.header.links.github}`}
                className="flex items-center gap-2 px-4 py-2 bg-headingTextDark/5 rounded-xl hover:bg-headingTextDark hover:text-white transition-colors"
              >
                <FaGithub />{" "}
                <span className="dir-ltr">
                  {resumeData.header.links.github}
                </span>
              </Link>
              <Link
                href={`https://${resumeData.header.links.linkedin}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:block">
            <div className="md:col-span-1 space-y-10 print:mb-8">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                    <FaCode />
                  </span>
                  <h3 className="text-xl font-bold">جعبه ابزار من</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Expert (تخصص اصلی)
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {resumeData.skills.expert.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg text-sm font-bold border border-green-500/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Comfortable (مسلط)
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {resumeData.skills.comfortable.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg text-sm border border-blue-500/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                    <FaGraduationCap />
                  </span>
                  <h3 className="text-xl font-bold">مسیر یادگیری</h3>
                </div>
                <div className="relative border-r-2 border-gray-200 dark:border-white/10 pr-4 space-y-6">
                  {resumeData.educationPath.map((edu) => (
                    <div key={edu.id} className="relative">
                      <div className="absolute -right-[21px] top-1 w-3 h-3 bg-yellow-500 rounded-full ring-4 ring-bgLight dark:ring-bgDark"></div>
                      <h4 className="font-bold">{edu.title}</h4>
                      <p className="text-xs text-gray-500 mb-1">
                        {edu.source} | {edu.date}
                      </p>
                      <p className="text-sm opacity-80">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                  <FaRocket />
                </span>
                <h3 className="text-xl font-bold">تجربیات توسعه (Projects)</h3>
              </div>

              <div className="space-y-8">
                {resumeData.buildingExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="group relative bg-white/5 dark:bg-white/5 rounded-2xl p-6 border border-brd/10 hover:border-purple-500/30 transition-all print:border-gray-300 print:bg-transparent print:p-0 print:mb-6"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-headingTextLight dark:text-white group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="text-xs font-mono text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded">
                          {exp.type}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-bodyTextLight dark:text-gray-300 mb-4 text-sm leading-6">
                      {exp.description}
                    </p>

                    <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-500 dark:text-gray-400 marker:text-purple-500">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 print:border-gray-200">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-gray-500 font-mono"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
