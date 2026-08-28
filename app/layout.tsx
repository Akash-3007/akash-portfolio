import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import {
  personJsonLd,
  siteDescription,
  siteKeywords,
  siteTitle,
  websiteJsonLd,
  ogImage,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — BCA Student & Developer`,
    template: `%s · ${profile.name}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: profile.name,
  category: "portfolio",
  formatDetection: { email: false, telephone: false, address: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: profile.name,
    images: [
      {
        url: ogImage.url,
        secureUrl: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
        type: ogImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="image_src" href={`${profile.siteUrl}/og.png`} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd(), websiteJsonLd()]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
