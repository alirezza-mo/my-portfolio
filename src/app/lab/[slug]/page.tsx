"use client";
import { useParams, useRouter } from "next/navigation";
import { experiments } from "@/component/modules/lab/labData";
import ParticleScene from "@/component/modules/lab/Experiments/ParticleScene";
import { HiArrowRight } from "react-icons/hi2"; 
import PhysicsPlayground from "@/component/modules/lab/Experiments/PhysicsPlayground";

export default function ExperimentPage() {
  const { slug } = useParams();
  const router = useRouter(); 
  
  const data = experiments.find(e => e.path.endsWith(slug as string));

  if (!data) return <div className="p-20 text-center">آزمایش پیدا نشد!</div>;

  return (
    <main className="min-h-screen bg-bgLight dark:bg-bgDark p-6 md:p-12 transition-colors">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-bodyTextLight/50 dark:text-bodyTextDark/50 hover:text-headingTextLight dark:hover:text-headingTextDark transition-all duration-300"
        >
          <div className="p-2 rounded-full bg-surfaceLight dark:bg-surfaceDark border border-brd/10 group-hover:border-headingTextDark/50 shadow-sm">
            <HiArrowRight className="text-xl" />
          </div>
          <span className="font-bold text-sm">بازگشت به آزمایشگاه</span>
        </button>

        <div className="flex flex-col gap-8">
          <div className="h-[60vh] w-full rounded-3xl border-2 border-brd/20 bg-bgDark overflow-hidden shadow-2xl relative">
            {data.id === 1 && <ParticleScene />}
            {data.id === 2 && <PhysicsPlayground />}
            
            <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white border border-white/20 uppercase tracking-widest">
               Interactive Mode
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-black text-headingTextLight dark:text-headingTextDark mb-4">
                {data.title}
              </h1>
              <p className="text-bodyTextLight/80 dark:text-bodyTextDark/80 leading-8 text-lg text-justify">
                {data.description}
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-brd/10 h-fit shadow-sm">
              <h4 className="font-bold mb-4 opacity-40 uppercase text-[10px] tracking-widest text-bodyTextLight dark:text-bodyTextDark">
                تکنولوژی‌های استفاده شده
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-xl bg-headingTextLight/5 dark:bg-headingTextDark/10 text-headingTextLight dark:text-accentDark text-xs font-mono border border-headingTextLight/10 dark:border-accentDark/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}