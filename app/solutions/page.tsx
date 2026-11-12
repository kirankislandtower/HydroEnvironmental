import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import { Capabilities, PageHero } from "@/components/sections/Sections";
import Chapters from "@/components/sections/Chapters";
import { statementImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engineering Divisions — Flushing & Utilities UAE",
  description:
    "Eight HEES divisions: pipeline pre-commissioning, district cooling, factory utilities, water treatment, process plants, industrial cleaning and chemicals.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="Divisions"
        eyebrow="Core business divisions"
        title="Eight divisions. One engineering standard."
        lead="Engineer → Assemble → Execute → Test → Commission → Optimize → Maintain — applied to every fluid, process and utility system we touch."
        image={statementImage}
      />
      <Capabilities />
      <Chapters />
    </InnerPage>
  );
}
