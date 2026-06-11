import type { Metadata } from "next";
import { Bricolage_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

const bricolage = Bricolage_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
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
