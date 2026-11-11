import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { solutionPages } from "@/lib/pages";

export const alt = "Hydro Environmental & Engineering Services — engineering division";
export const size = ogSize;
export const contentType = ogContentType;

// build every division card ahead of time (same slugs as the page)
export function generateStaticParams() {
  return solutionPages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = solutionPages.find((x) => x.slug === slug);
  return ogCard({ eyebrow: p?.eyebrow ?? "Engineering division", title: p?.title ?? "Engineering reliability in every process.", image: p?.image });
}
