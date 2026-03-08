import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Stack Developer & AI Integration Expert",
  description: "Professional portfolio showcasing web development, AI integration, and automation projects. Specialized in Next.js, Python, and LLM applications.",
  keywords: ["Full-Stack Developer", "AI Integration", "Web Development", "Automation", "Next.js", "Python", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
