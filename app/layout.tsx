import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavbarMenu from "@/components/Navbar";
import { Reddit_Mono } from "next/font/google";

const reddit_mono = Reddit_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adelin Visuals",
  description: "Adelin Visuals Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${reddit_mono.className} flex flex-col h-screen bg-black text-white`}
      >
        <NavbarMenu />

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
