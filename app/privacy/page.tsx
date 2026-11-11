import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { PageHero } from "@/components/sections/Sections";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hydro Environmental & Engineering Services LLC handles enquiries and personal information submitted through heesllc.ae.",
  alternates: { canonical: "/privacy" },
};

// Plain-language policy matching how the site actually works today: no accounts, no analytics,
// the enquiry form opens the visitor's own email app, WhatsApp/phone links hand off to those apps.
// Review with the company before launch if any tracking or a form backend is added.
export default function PrivacyPage() {
  return (
    <InnerPage cta={false}>
      <PageHero variant="center" crumb="Privacy" eyebrow="Legal" title="Privacy policy." lead={`How ${company.name} handles the information you share with us.`} />
      <section data-tone="light" className="legal">
        <div className="wrap legal-body">
          <p><small>Last updated: November 2026</small></p>
          <h2 className="serif">Who we are</h2>
          <p>{company.name} (&ldquo;HEES&rdquo;, &ldquo;we&rdquo;) is a company licensed in Sharjah, United Arab Emirates, located at {company.location.join(", ")}. You can reach us at <a href={`mailto:${company.email}`}>{company.email}</a> or <a href={company.phoneHref}>{company.phone}</a>.</p>
          <h2 className="serif">What we collect</h2>
          <p>This website does not use accounts, advertising trackers or analytics cookies. We only receive personal information when you choose to contact us:</p>
          <ul>
            <li><b>Enquiry form</b> — the form opens your own email app with your details pre-filled. Nothing is stored on this website; we receive the email only when you send it.</li>
            <li><b>Email, phone and WhatsApp</b> — when you contact us directly we receive what you send, such as your name, company, number and project details. WhatsApp messages are also subject to WhatsApp&apos;s own privacy policy.</li>
          </ul>
          <h2 className="serif">How we use it</h2>
          <p>We use your information only to reply to your enquiry, prepare methods and quotations, and deliver the services you request. We do not sell your information or use it for unrelated marketing.</p>
          <h2 className="serif">Sharing</h2>
          <p>We may share project details within the Island Tower Group of Companies, or with suppliers and subcontractors, where needed to deliver your project. We may disclose information where required by UAE law.</p>
          <h2 className="serif">Third-party content</h2>
          <p>Our contact pages show an embedded Google Map. Google may set its own cookies when the map loads; see Google&apos;s privacy policy for details.</p>
          <h2 className="serif">Keeping and deleting your information</h2>
          <p>We keep enquiry and project correspondence for as long as needed for the project and our legal and accounting obligations. To ask what we hold about you, or to have it corrected or deleted, email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
          <h2 className="serif">Changes</h2>
          <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>
        </div>
      </section>
    </InnerPage>
  );
}
