import { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider, Navbar } from "@/components/ui";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SWAPI Explorer",
    description: "Star Wars API Explorer built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // hydration warning is suppressed because next-themes causes a mismatch but is necessary for theme support
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen font-sans`}
            >
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
