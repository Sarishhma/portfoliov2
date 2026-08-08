import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { RiMailSendLine } from "react-icons/ri";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A premium modern portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <ScrollProgress />
        {children}
        
        {/* Floating Email Button */}
        <a 
          href="mailto:sarishma04@gmail.com" 
          className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-brand-primary text-background shadow-[0_0_20px_rgba(201,169,232,0.4)] hover:shadow-[0_0_30px_rgba(232,201,154,0.6)] hover:bg-brand-secondary transition-all duration-300 group flex items-center justify-center"
          title="Send me an email"
        >
          <RiMailSendLine className="text-2xl group-hover:scale-110 transition-transform" />
        </a>
      </body>
    </html>
  );
}
