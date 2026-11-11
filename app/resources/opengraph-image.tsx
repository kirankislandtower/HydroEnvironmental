import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { resourcesImage } from "@/lib/content";

export const alt = "HEES resources — capability profile, equipment list, method statements and FAQ";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Resources", title: "Documents & answers for your project team.", image: resourcesImage });
}
