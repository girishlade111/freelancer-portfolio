import type { Metadata } from "next";
import { Public_Sans, Inter, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const bricolage = Public_Sans({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Girish Lade — Full-Stack + AI Product Builder",
  description:
    "Available for freelance. Building fast, scalable, AI-powered products for agencies and startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="bg-navy-900 text-cream-100 overflow-x-hidden min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
