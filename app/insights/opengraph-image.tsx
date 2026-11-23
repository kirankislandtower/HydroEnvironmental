import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "HEES Insights — flushing, hydrotesting and pre-commissioning guides";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Insights · Technical guides", title: "Field notes from flushing & pre-commissioning.", image: "/images/sectors/district-cooling.webp" });
}
