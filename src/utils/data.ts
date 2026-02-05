let exp :{id : number , tech : string , color : string , year : string , icon : string  }[] = [
  {id:1 , tech : "TypeScript" , color : "#3178C6" , year : 'فروردین1403 -فروردین 1403', icon : "<SiTypescript />"}
]
export { exp }

export const projectsData = [
  {
    id: 1,
    title: "وبسایت 4K-club",
    category: "Full Stack",
    description: "پلتفرم رقابتی برای گیم‌نت‌ها با قابلیت چت آنلاین و لیدربرد زنده.",
    image: "/images/4k-club.png",
    techStack: ["Next.js", "MongoDB", "Pusher", "Tailwind"],
    github: "https://github.com/alirezza-mo/club-4k",
    demo: "https://club-4k.vercel.app/",
  },
  {
    id: 2,
    title: "فروشگاه ست کافی",
    category: "E-Commerce",
    description: "فروشگاه آنلاین قهوه با سیستم احراز هویت OTP و پنل مدیریت کامل.",
    image: "/images/set-coffee.png",
    techStack: ["React", "Leaflet", "Node.js", "Redis"],
    github: "https://github.com/alirezza-mo/set-coffee",
    demo: null, // اگر دمو ندارد
  },
  {
    id: 3,
    title: "گیم لند (GameLand)",
    category: "Frontend",
    description: "رابط کاربری مدرن برای فروشگاه بازی با تمرکز بر تجربه کاربری (UX).",
    image: "/images/gameLand.png",
    techStack: ["React", "Material UI", "Framer Motion"],
    github: "https://github.com/alirezza-mo/game-land",
    demo: "https://gameland-demo.vercel.app",
  },
  {
    id: 4,
    title: "هواشناسی (Weather App)",
    category: "Tools",
    description: "اپلیکیشن دقیق هواشناسی با استفاده از API و Geolocation.",
    image: "/images/weather.png",
    techStack: ["JavaScript", "AccuWeather API", "CSS3"],
    github: "https://github.com/alirezza-mo/weatherApp",
    demo: null,
  },
  {
    id: 5,
    title: "پنل مدیریت CMS",
    category: "Dashboard",
    description: "داشبورد مدیریت محتوا با نمودارهای تحلیلی و جداول داده.",
    image: "/images/cms.png",
    techStack: ["React", "Recharts", "Sass"],
    github: "https://github.com/alirezza-mo/dashboard",
    demo: null,
  },
];