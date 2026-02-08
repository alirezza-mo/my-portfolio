
import { Metadata } from "next";
import CreativeResume from "@/component/templates/Resume/ResumeView";
import Navbar from "@/component/modules/Navber/Navbar";
import Sidebar from "@/component/modules/slider/Slider";

export const metadata: Metadata = {
  title: "رزومه من | علیرضا مرادی",
  description: "مشاهده و دانلود رزومه کاری و سوابق شغلی",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-bgLight dark:bg-bgDark transition-colors">
      <Sidebar/>
      <div className="container mx-auto">
        <CreativeResume />
      </div>
    </main>
  );
}