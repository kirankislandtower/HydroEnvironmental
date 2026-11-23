import Link from "next/link";
import { formatDate, readingMinutes, type Article } from "@/lib/insights";

export default function ArticleCard({ a, level = 2 }: { a: Article; level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <li className="ins-card">
      <Link href={`/insights/${a.slug}`}>
        <span className="ins-card-img">
          {/* eslint-disable-next-line @next/next/no-img-element -- local pre-optimized WebP */}
          <img src={a.image} alt={a.imageAlt} loading="lazy" decoding="async" />
        </span>
        <span className="ins-card-body">
          <small>{a.category} · {readingMinutes(a)} min read</small>
          <H className="serif">{a.title}</H>
          <p>{a.excerpt}</p>
          <span className="ins-card-meta"><time dateTime={a.published}>{formatDate(a.published)}</time><i aria-hidden="true">→</i></span>
        </span>
      </Link>
    </li>
  );
}
