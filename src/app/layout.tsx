

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import AOSInit from "@/utils/aos";
import FloatingTerminal from "@/component/templates/index/body/FloatingTerminal";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-vazir",
  display: "swap",
});


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "علیرضا مرادی | توسعه‌دهنده فرانت‌اند",
    template: "%s | علیرضا مرادی",
  },
  description: "پورتفولیو شخصی علیرضا مرادی، توسعه‌دهنده React و Next.js. مشاهده پروژه‌ها، رزومه و آزمایشگاه کد.",
  keywords: ["علیرضا مرادی", "برنامه نویس فرانت اند", "React Developer", "Next.js", "توسعه دهنده وب", "طراحی سایت"],
  authors: [{ name: "علیرضا مرادی" }],
  creator: "علیرضا مرادی",
  
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://portfolio-roan-gamma-32.vercel.app/",
    title: "علیرضا مرادی | پورتفولیو شخصی",
    description: "خالق رابط‌های کاربری مدرن و تعاملی. پروژه‌های من را اینجا ببینید.",
    siteName: "Alireza Mo",
    images: [
      {
        url: "/hs-mb-purple.webp", 
        width: 1200,
        height: 630,
        alt: "علیرضا مرادی - توسعه‌دهنده فرانت‌اند",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "علیرضا مرادی",
    description: "توسعه‌دهنده خلاق فرانت‌اند",
    images: ["/hs-mb-purple.webp"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={` ${vazir.variable} font-sans  scroll-smooth `}
    >
      <body className="font-vazir">
        <AOSInit/>
        {children}
        <FloatingTerminal/>
      </body>
    </html>
  );
}
