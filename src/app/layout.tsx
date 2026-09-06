import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { RiMailSendLine } from "react-icons/ri";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Sarishma",
  description: "A premium modern portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth suppressHydrationWarning">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <ScrollProgress />
        {children}
        
        {/* Floating Email Button */}
        <a 
          href="mailto:sarishma04@gmail.com" 
          className="fixed bottom-6 left-6 z-50 p-4 rounded-sm bg-brand-primary text-surface transition-all duration-300 group flex items-center justify-center hover:bg-brand-primary-hover"
          title="Send me an email"
        >
          <RiMailSendLine className="text-2xl group-hover:scale-110 transition-transform" />
        </a>
      </body>
    </html>
  );
}
