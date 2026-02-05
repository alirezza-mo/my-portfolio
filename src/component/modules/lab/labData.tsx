import { SiCanvas , SiFramer, SiTypescript, SiReact } from "react-icons/si";

export interface Experiment {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  path: string;
  status: "Completed" | "In-Progress" | "Experimental";
}

export const experiments: Experiment[] = [
  {
    id: 1,
    title: "Particle Network",
    description: "سیستم ذرات متحرک با استفاده از Canvas API و بهینه‌سازی شده برای پرفورمنس بالا.",
    tags: ["Canvas", "TS", "Math"],
    icon: <SiCanvas />,
    path: "/lab/particles",
    status: "Completed",
  },
  {
    id: 2,
    title: "Framer Motion Physics",
    description: "بررسی رفتارهای فیزیکی اشیاء و کشسانی در رابط کاربری با Framer Motion.",
    tags: ["Framer", "UI", "UX"],
    icon: <SiFramer />,
    path: "/lab/physics",
    status: "Experimental",
  },
];