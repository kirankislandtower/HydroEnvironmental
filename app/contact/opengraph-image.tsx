import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { contactImage } from "@/lib/content";

export const alt = "Contact Hydro Environmental & Engineering Services LLC, Al Sajaa Industrial Area, Sharjah";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ eyebrow: "Call · WhatsApp · Email", title: "Let’s talk about your system.", image: contactImage });
}
