import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { productRanges } from "@/lib/content";

export const alt = "HEES equipment rental, sales and water treatment chemicals in the UAE";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Equipment & chemicals", title: "Engineered equipment and chemistry, on call.", image: productRanges[0].image });
}
