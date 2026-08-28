import { profile } from "@/data/profile";

export const siteTitle = profile.name;

export const siteDescription =
  "BCA student exploring software, AI, and the web.";

export const ogImage = {
  url: `${profile.siteUrl}/og.jpg`,
  width: 1200,
  height: 630,
  alt: `${profile.name} — ${siteDescription}`,
  type: "image/jpeg",
} as const;

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
