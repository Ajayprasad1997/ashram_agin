
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import MobileBottomBar from "./components/MobileBottomBar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",  
});
  
export const metadata: Metadata = {
  title: "Shree Krishna Bhakti Ashram",
  description:
    "Discover spiritual peace, accommodation, devotional activities and sacred experiences at Shree Krishna Bhakti Ashram.",
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="min-h-screen bg-zinc-50 dark:bg-black antialiased">
        <Preloader />
        <Header />
         <MobileBottomBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
