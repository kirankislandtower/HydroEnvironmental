import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import ProjectIndex from "@/components/ProjectIndex";
import { ClientMarquee, GroupExperience, PageHero } from "@/components/sections/Sections";
import { groupStats, references } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");
const recent = references.filter((r) => !r.historic).length;
const priority = references.filter((r) => r.priority).length;
const historic = references.length - recent;

export const metadata: Metadata = {
  title: "Projects & References — Flushing UAE",
  description:
    "Hydro project references across the UAE — Empower City of Arabia, Dubai Hills Estate DCP-2, AG Engineering DCPs, Beeah HQ, Etihad Rail, and major commercial towers.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <InnerPage>
      <PageHero
        crumb="Projects"
        eyebrow="Projects & Track Record"
        title="Systems delivered ready for operation."
        lead="Flushing, testing, chemical treatment and commissioning support for contractors, consultants and operators across the UAE — each listed with the exact scope."
        variant="index"
        facts={[
          { v: pad(priority), k: "Priority landmark projects" },
          { v: pad(recent), k: "Hydro project references" },
          { v: groupStats[0].v, k: "Group flushing jobs" },
          { v: "07", k: "Emirates supported" },
        ]}
      />
      <ProjectIndex />
      <ClientMarquee />
      <GroupExperience />
    </InnerPage>
  );
}
