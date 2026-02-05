import React from "react";
import { experiments } from "@/component/modules/lab/labData";
import LabCard from "@/component/modules/lab/LabCard";

export default function LabPage() {
  return (
    <main className="min-h-screen bg-bgLight dark:bg-bgDark py-24 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-bodyTextLight dark:text-bodyTextDark mb-4">
            آزمایشگاه <span className="text-headingTextLight dark:text-headingTextDark">کد</span>
          </h1>
          <p className="max-w-2xl text-bodyTextLight/60 dark:text-bodyTextDark/60 leading-7">
            مجموعه‌ای از تست‌های فنی، انیمیشن‌های تجربی و قطعه کدهایی که در مسیر توسعه یاد گرفته‌ام. اینجا جایی برای بازی با کدهاست.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp) => (
            <LabCard key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </main>
  );
}