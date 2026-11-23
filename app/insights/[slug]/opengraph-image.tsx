import { ogCard, ogContentType, ogSize } from "@/lib/og";
import { articles } from "@/lib/insights";

export const alt = "HEES Insights article";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return ogCard({ eyebrow: a ? `Insights · ${a.category}` : "Insights", title: a?.title ?? "Field notes from flushing & pre-commissioning.", image: a?.image });
}
