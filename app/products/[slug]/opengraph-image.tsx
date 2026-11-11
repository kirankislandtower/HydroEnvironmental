import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { productPages } from "@/lib/pages";

export const alt = "Hydro Environmental & Engineering Services — equipment and chemicals";
export const size = ogSize;
export const contentType = ogContentType;

// build every division card ahead of time (same slugs as the page)
export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productPages.find((x) => x.slug === slug);
  return ogCard({ eyebrow: p?.eyebrow ?? "Equipment", title: p?.title ?? "Engineered equipment, on call.", image: p?.image });
}
