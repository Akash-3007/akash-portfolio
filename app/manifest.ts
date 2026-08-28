import type { MetadataRoute } from "next";
import { siteDescription } from "@/lib/seo";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: "Akash K.",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    lang: "en",
  };
}
