import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import Faq from "@/components/sections/Faq";
import { PageHero, Resources } from "@/components/sections/Sections";
import { resourcesImage } from "@/lib/content";
import { faqStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Capability Profile, Equipment List & FAQ",
  description:
    "Request the HEES capability profile, equipment list and method statements, and read answers on flushing, hydrotesting and equipment rental.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <InnerPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData()).replace(/</g, "\\u003c") }}
      />
      <PageHero
        crumb="Resources"
        eyebrow="Resources"
        title="Documents & answers."
        lead="Capability profile, equipment list and method statements for consultants, contractors and procurement teams — plus answers to the questions we hear most."
        variant="center"
        image={resourcesImage}
      />
      <Resources />
      <Faq />
    </InnerPage>
  );
}
