import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "HEES project references — chilled water flushing, chemical treatment and STP projects across the UAE";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Project references", title: "Systems delivered ready for operation.", image: "/images/sectors/district-cooling.webp" });
}
