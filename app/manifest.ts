import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "HEES",
    description: "Chem-mechanical process engineering, flushing, pre-commissioning and equipment rental in the UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1d33",
    theme_color: "#0a1d33",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon1.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
