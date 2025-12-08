import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";


const vazir= Vazirmatn({
  subsets: ["arabic"],
  weight: ["200","400", "700" , "900"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata : Metadata = {
  title: "وبسایت گیم نت 4K",
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
      <body className="font-vazir">{children}</body>
    </html>
  );
}
