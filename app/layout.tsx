import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const description =
  "Akash Kinjawadekar is a BCA student at Christ University, Bangalore, building strong computer science fundamentals and exploring software development, AI/ML, and the web.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Akash Kinjawadekar — BCA Student & Developer",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Akash Kinjawadekar — BCA Student & Developer",
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Akash Kinjawadekar — BCA Student & Developer",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}