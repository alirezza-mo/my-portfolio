import Footer from "@/component/modules/Footer/Footer";
import Header from "@/component/templates/index/header/Header";
import Image from "next/image";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <main>
        <Header/>
        <Footer/>
      </main>
    </>
  );
}
