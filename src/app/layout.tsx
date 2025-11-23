import { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui";
import { PropsWithChildren } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWAPI Explorer",
  description: "Star Wars API Explorer built with Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
