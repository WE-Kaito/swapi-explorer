import { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import { PropsWithChildren, Suspense } from "react";
import { Header, Navbar, Skeleton } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWAPI Explorer",
  description: "Star Wars API Explorer built with Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={"h-screen"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased  h-full flex flex-col font-sans`}
      >
        <Header>
          <Suspense
            fallback={
              <>
                <Skeleton text="Home" />
                <Skeleton text="Categories" />
              </>
            }
          >
            <Navbar />
          </Suspense>
        </Header>
        {children}
      </body>
    </html>
  );
}
