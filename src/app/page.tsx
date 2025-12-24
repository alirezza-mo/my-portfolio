import Footer from "@/component/modules/Footer/Footer";
import AboutMe from "@/component/templates/index/body/AboutMe";
import Projects from "@/component/templates/index/body/Projects";
import Skills from "@/component/templates/index/body/Skills";
import Header from "@/component/templates/index/header/Header";
import dynamic from "next/dynamic";
import React from "react";
const GithubStats = dynamic(
  () => import("@/component/templates/index/body/GithubActivity"),
  { ssr: false }
);

export default function Home(): React.ReactElement {
  return (
    <>
      <main className="bg-bgLight dark:bg-bgDark">
        <Header />
        <div className="container">
          <AboutMe />
        </div>
        <Skills />
        <div className="container">
          <Projects />
        </div>
        <GithubStats username="alirezza-mo" />
        <Footer />
      </main>
    </>
  );
}
