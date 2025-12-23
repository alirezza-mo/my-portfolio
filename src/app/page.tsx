import Footer from "@/component/modules/Footer/Footer";
import AboutMe from "@/component/templates/index/body/AboutMe";
import Projects from "@/component/templates/index/body/Projects";
import Skills from "@/component/templates/index/body/Skills";
import Header from "@/component/templates/index/header/Header";
import React from "react";


export default function Home(): React.ReactElement {
  return (
    <>
      <main className="bg-bgLight dark:bg-bgDark">
        <Header/>
        <div className="container">
          <AboutMe/>
        </div>
        <Skills/>
        <div className="container">
          <Projects/>
        </div>
        <Footer/>
      </main>
    </>
  );
}
