function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) {
    return vercelProd.startsWith("http")
      ? vercelProd.replace(/\/$/, "")
      : `https://${vercelProd}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  return "https://your-domain-placeholder.example";
}

export const profile = {
  name: "Akash Kinjawadekar",
  initials: "AK",
  role: "Undergraduate BCA Student",
  tagline: "An undergraduate developer exploring software, AI, and the web.",
  bio: "I'm a BCA student at Christ University, Bangalore, focused on building strong computer science fundamentals, practical software skills, and useful technology.",
  about: [
    "I'm currently pursuing a Bachelor of Computer Applications (BCA) at Christ University, Bangalore, with a focus on software development, problem-solving, and computer fundamentals.",
    "I enjoy understanding how technologies work beneath the surface — not just how to use them. Right now that means strengthening my foundations in Python, data structures, operating systems, and the web, while exploring machine learning and modern AI systems.",
  ],
  location: "Bengaluru, Karnataka, India",
  email: "akashkinjawadekar7@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL on deploy (no trailing slash). Vercel sets this automatically.
  siteUrl: resolveSiteUrl(),
  socials: {
    github: "https://github.com/Akash-3007",
    linkedin: "https://www.linkedin.com/in/akash-kinjawadekar-021683314/",
    instagram: "https://www.instagram.com/akash3007_/",
  },
  education: {
    institution: "Christ University",
    program: "Bachelor of Computer Applications (BCA)",
    location: "Bengaluru, Karnataka, India",
    gpa: "3.43 / 4.0",
    grade: "A",
  },
  skills: [
    { group: "Programming", items: ["Python"] },
    { group: "Web", items: ["HTML", "CSS"] },
    {
      group: "Computer Science",
      items: ["Data Structures", "Operating Systems", "Computer Fundamentals"],
    },
    { group: "Database", items: ["SQL"] },
    {
      group: "Exploring",
      items: [
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Natural Language Processing",
        "Transformers",
      ],
      exploring: true,
    },
  ],
  interests: [
    "Software Development",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Transformers",
    "Competitive Programming",
    "Open Source",
  ],
  exploring: [
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Natural Language Processing",
    "Transformers",
    "Web Development",
    "Competitive Programming",
    "Open Source",
  ],
  experience: [
    {
      role: "Records Committee",
      org: "Samagra (CS Association)",
      period: "July 2026 – Present",
      location: "",
      // EDIT: add responsibilities when available.
      description: "Contributing to the CS association's records and documentation.",
    },
    {
      role: "Research & Content",
      org: "SDG CELL BYC",
      period: "July 2026 – Present",
      location: "",
      description: "Supporting research and content initiatives for the SDG Cell.",
    },
    {
      role: "Research & Development, Centre for Service Learning (CSL)",
      org: "CHRIST University, Yeshwanthpur Campus (BYC)",
      period: "June 2026 – Present",
      location: "Bengaluru, Karnataka, India",
      description: "Involved in research and development work at the Centre for Service Learning.",
    },
  ],
  // Replace these placeholders with real projects.
  projects: [
    {
      title: "Project coming soon",
      description: "Add project details here — what it does, why you built it, and what you learned.",
      technologies: ["Python"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      title: "Project coming soon",
      description: "Add project details here.",
      technologies: ["HTML", "CSS"],
      github: "",
      demo: "",
      featured: false,
    },
    {
      title: "Project coming soon",
      description: "Add project details here.",
      technologies: ["SQL"],
      github: "",
      demo: "",
      featured: false,
    },
  ],
};

export type Project = (typeof profile.projects)[number];