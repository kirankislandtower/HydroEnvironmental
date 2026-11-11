import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { aboutImage } from "@/lib/content";

export const alt = "About Hydro Environmental & Engineering Services LLC — chem-mechanical process engineering in the UAE";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "About HEES · Since 2008", title: "Engineering reliability in every process.", image: aboutImage });
}
