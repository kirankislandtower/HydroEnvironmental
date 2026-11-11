import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { statementImage } from "@/lib/content";

export const alt = "HEES engineering divisions — flushing, pre-commissioning, utilities, water treatment and more";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "8 engineering divisions", title: "Engineering, equipment and chemistry — as one.", image: statementImage });
}
