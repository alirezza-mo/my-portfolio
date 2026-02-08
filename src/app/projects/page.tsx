import React from "react";
import ProjectList from "@/component/templates/projects/ProjectList";
import { projectsData } from "../../utils/data";
import { HiCodeBracketSquare } from "react-icons/hi2";
import Navbar from "@/component/modules/Navber/Navbar";

export const metadata = {
  title: "پروژه‌ها | علیرضا مرادی",
  description: "آرشیو کامل پروژه‌های توسعه داده شده توسط علیرضا مرادی",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 container mx-auto">
      <Navbar />
      <header className="flex flex-col items-center text-center my-24">
        <div className="p-3 bg-headingTextDark/10 rounded-full text-headingTextDark mb-4">
          <HiCodeBracketSquare size={32} className="m-0"/>
        </div>
        <h1 className="text-4xl md:text-5xl font-black dark:text-headingTextDark">
          آرشیو پروژه‌ها
        </h1>
      </header>

      <ProjectList projects={projectsData} />
    </main>
  );
}
