import Footer from "@/component/modules/Footer/Footer";
import AboutMe from "@/component/templates/index/header/AboutMe";
import Header from "@/component/templates/index/header/Header";
import React from "react";


export default function Home(): React.ReactElement {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-950">
        <Header/>
        <div className="container">
          <AboutMe/>
        </div>
        <Footer/>
      </main>
    </>
  );
}
