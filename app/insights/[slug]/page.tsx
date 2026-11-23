import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPage from "@/components/InnerPage";
import ArticleCard from "@/components/insights/ArticleCard";
import Rich, { plain } from "@/components/insights/Rich";
import Faq from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/Sections";
import { articles, formatDate, readingMinutes } from "@/lib/insights";
import { company } from "@/lib/content";
import { faqStructuredData, ldJson, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { type: "article", title: a.metaTitle, description: a.metaDescription, publishedTime: a.published, modifiedTime: a.updated ?? a.published },
  };
}

const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const path = `/insights/${a.slug}`;
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const posting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}${path}#article`,
    headline: a.title,
    description: a.metaDescription,
    image: `${siteUrl}${a.image}`,
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    inLanguage: "en-AE",
    articleSection: a.category,
    mainEntityOfPage: `${siteUrl}${path}`,
    author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: company.name, url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
    about: a.services.map((s) => ({ "@type": "Service", name: s.label, url: `${siteUrl}${s.href}` })),
  };

  return (
    <InnerPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(posting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faqStructuredData(a.faqs, path)) }} />
      <PageHero
        variant="split"
        crumb={a.category}
        parent={{ label: "Insights", href: "/insights" }}
        eyebrow={`${a.category} · ${readingMinutes(a)} min read`}
        title={a.title}
        lead={a.excerpt}
        image={a.image}
        imageAlt={a.imageAlt}
        kicker={formatDate(a.published)}
      />

      <article data-tone="light" className="post">
        <div className="wrap post-grid">
          <aside className="post-aside">
            <nav className="post-toc" aria-label="In this article">
              <span className="label green">In this article</span>
              <ol>
                {a.sections.map((s) => <li key={s.h}><a href={`#${anchor(s.h)}`}>{s.h}</a></li>)}
              </ol>
            </nav>
            <div className="post-services">
              <span className="label green">Related services</span>
              <ul>
                {a.services.map((s) => <li key={s.href}><Link href={s.href}>{s.label} <i aria-hidden="true">→</i></Link></li>)}
              </ul>
            </div>
          </aside>

          <div className="prose">
            <p className="post-meta">
              By the HEES engineering team · <time dateTime={a.published}>{formatDate(a.published)}</time>
              {a.updated && <> · Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time></>}
            </p>
            {a.sections.map((s) => (
              <section key={s.h} id={anchor(s.h)}>
                <h2 className="serif">{s.h}</h2>
                {s.p.map((t, i) => <p key={i}><Rich text={t} /></p>)}
                {s.list && <ul>{s.list.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>}
                {s.after?.map((t, i) => <p key={`a${i}`}><Rich text={t} /></p>)}
              </section>
            ))}
            <div className="post-cta">
              <h2 className="serif">Planning this on a UAE project?</h2>
              <p>Share the system type, pipe sizes or volume, location and required scope — our engineers will propose a method and equipment package.</p>
              <Link className="btn btn-dark" href="/contact#contact">Talk to an engineer →</Link>
            </div>
          </div>
        </div>
      </article>

      <Faq list={a.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))} title="Questions, answered." intro={a.metaDescription} cta="/contact#contact" />

      <section className="ins-more" data-tone="light" aria-labelledby="more-h">
        <div className="wrap">
          <div className="ins-more-head">
            <h2 className="serif" id="more-h">More insights.</h2>
            <Link href="/insights">All articles →</Link>
          </div>
          <ul className="ins-grid">
            {more.map((x) => <ArticleCard key={x.slug} a={x} level={3} />)}
          </ul>
        </div>
      </section>
    </InnerPage>
  );
}
