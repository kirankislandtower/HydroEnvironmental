import type { Metadata } from "next";
import Link from "next/link";
import InnerPage from "@/components/InnerPage";
import { PageHero } from "@/components/sections/Sections";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <InnerPage>
      <PageHero
        variant="center"
        crumb="Page not found"
        eyebrow="404"
        title="This page has moved or never existed."
        lead="The link may be out of date. Try one of our divisions, browse project references, or contact our engineers directly."
      />
      <section data-tone="light" className="legal">
        <div className="wrap legal-links">
          <Link className="btn btn-dark" href="/">Back to home →</Link>
          <Link className="btn btn-line-dark" href="/solutions">Our divisions</Link>
          <Link className="btn btn-line-dark" href="/contact">Contact us</Link>
        </div>
      </section>
    </InnerPage>
  );
}
