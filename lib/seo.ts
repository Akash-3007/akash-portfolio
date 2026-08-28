import { profile } from "@/data/profile";

export const siteTitle = `${profile.name} — BCA Student & Developer`;

export const siteDescription =
  "Akash Kinjawadekar is a BCA student at Christ University, Bangalore, building computer science fundamentals and exploring software development, AI/ML, and the web.";

export const siteKeywords = [
  "Akash Kinjawadekar",
  "BCA student",
  "Christ University",
  "Bengaluru",
  "software development",
  "Python",
  "web development",
  "machine learning",
  "AI",
  "portfolio",
];

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    email: profile.email,
    jobTitle: profile.role,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    sameAs: [
      profile.socials.github,
      profile.socials.linkedin,
      profile.socials.instagram,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: profile.siteUrl,
    description: siteDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
  };
}
