import { faqs } from "@/lib/content";
import FaqList from "./FaqList";

// Visible FAQ (native <details>, smooth open/close in FaqList) mirrored as FAQPage JSON-LD in lib/seo.ts
// Reused on division / equipment pages with page-specific questions.
export default function Faq({
  list = faqs,
  title = "Process engineering questions, answered.",
  intro = "Common questions about chilled water flushing, pre-commissioning, hydrotesting, chemical cleaning, industrial cleaning and equipment rental in the UAE.",
  cta = "#contact",
}: { list?: readonly { q: string; a: string }[]; title?: string; intro?: string; cta?: string }) {
  return (
    <section data-tone="light" className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-intro rv">
          <span className="label green">FAQ</span>
          <h2 className="serif">{title}</h2>
          <p>{intro}</p>
          <a className="btn btn-dark" href={cta}>Ask our team →</a>
        </div>
        <FaqList faqs={list} />
      </div>
    </section>
  );
}
