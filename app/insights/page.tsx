import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import ArticleCard from "@/components/insights/ArticleCard";
import { PageHero } from "@/components/sections/Sections";
import { articles } from "@/lib/insights";
import { ldJson, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights — Flushing, Hydrotesting & Pre-Commissioning Guides",
  description:
    "Practical guides from HEES engineers on chilled water flushing, hydrotesting, pipeline pre-commissioning, side-stream filtration and chemical cleaning in the UAE.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const list = [...articles].sort((a, b) => b.published.localeCompare(a.published));
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/insights#blog`,
    name: "HEES Insights",
    url: `${siteUrl}/insights`,
    publisher: { "@id": `${siteUrl}/#organization` },
    blogPost: list.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: `${siteUrl}/insights/${a.slug}`, datePublished: a.published })),
  };
  return (
    <InnerPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(blog) }} />
      <PageHero
        crumb="Insights"
        eyebrow="Insights · Technical guides"
        title="Insights & guides."
        lead="How chilled water networks, pipelines and process systems are cleaned, tested and handed over — written by the engineers who do the work."
        variant="index"
      />
      <section data-tone="light" className="ins-list">
        <div className="wrap">
          <ul className="ins-grid">
            {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </ul>
        </div>
      </section>
    </InnerPage>
  );
}
