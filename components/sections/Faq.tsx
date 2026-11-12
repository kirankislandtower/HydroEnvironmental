import { faqs } from "@/lib/content";
import FaqList from "./FaqList";

// Visible FAQ (native <details>, smooth open/close in FaqList) mirrored as FAQPage JSON-LD in lib/seo.ts
export default function Faq() {
  return (
    <section data-tone="light" className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-intro rv">
          <span className="label green">FAQ</span>
          <h2 className="serif">Process engineering questions, answered.</h2>
          <p>Common questions about chilled water flushing, pre-commissioning, hydrotesting, chemical cleaning, industrial cleaning and equipment rental in the UAE.</p>
          <a className="btn btn-dark" href="#contact">Ask our team →</a>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
